'use client'

import { useState } from 'react'
import { likeBlog, addComment } from '@/actions/blog'
import { Heart, MessageCircle, Send, Loader2 } from 'lucide-react'

interface Comment {
    id: string
    content: string
    userName: string
    createdAt: string
}

export function BlogInteractions({ blogId, initialLikes, comments: initialComments }: {
    blogId: string
    initialLikes: number
    comments: Comment[]
}) {
    const [likes, setLikes] = useState(initialLikes)
    const [liked, setLiked] = useState(false)
    const [comments, setComments] = useState(initialComments)
    const [newComment, setNewComment] = useState({ userName: '', content: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showComments, setShowComments] = useState(false)

    const handleLike = async () => {
        if (liked) return
        try {
            setLiked(true)
            setLikes(prev => prev + 1)
            await likeBlog(blogId)
        } catch (error) {
            console.error('Failed to like blog:', error)
            setLiked(false)
            setLikes(prev => prev - 1)
        }
    }

    const handleComment = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.userName.trim() || !newComment.content.trim()) return

        try {
            setIsSubmitting(true)
            const result = await addComment(blogId, { content: newComment.content, userName: newComment.userName })
            if (result.success) {
                setComments(prev => [{ id: (result as any).commentId || Date.now().toString(), ...newComment, createdAt: new Date().toISOString() }, ...prev])
                setNewComment({ userName: '', content: '' })
            }
        } catch (error) {
            console.error('Failed to add comment:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="mt-10 pt-8 border-t border-slate-200">
            {/* Like & Comment Counts */}
            <div className="flex items-center gap-6 mb-6">
                <button onClick={handleLike} className={`flex items-center gap-2 text-sm font-medium transition-colors ${liked ? 'text-red-500' : 'text-slate-500 hover:text-red-500'}`}>
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    {likes} Likes
                </button>
                <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {comments.length} Comments
                </button>
            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="space-y-6">
                    {/* Comment Form */}
                    <form onSubmit={handleComment} className="bg-slate-50 rounded-xl p-4 space-y-3">
                        <input
                            type="text" required placeholder="Your name"
                            value={newComment.userName} onChange={(e) => setNewComment(prev => ({ ...prev, userName: e.target.value }))}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-primary"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text" required placeholder="Write a comment..."
                                value={newComment.content} onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
                                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-primary"
                            />
                            <button type="submit" disabled={isSubmitting} className="btn-primary px-4 py-2 rounded-lg text-sm flex items-center gap-1">
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </button>
                        </div>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-4">
                        {comments.map(comment => (
                            <div key={comment.id} className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                                    {comment.userName[0]?.toUpperCase()}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-sm font-semibold text-slate-900">{comment.userName}</span>
                                        <span className="text-xs text-slate-400">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-sm text-slate-600">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                        {comments.length === 0 && <p className="text-sm text-slate-400 text-center py-4">No comments yet. Be the first!</p>}
                    </div>
                </div>
            )}
        </div>
    )
}
