'use server'

import { revalidatePath } from 'next/cache'

// Mock Blog Actions (Removing DB dependency)

export async function createBlog(data: any) {
    console.log('Mock: Creating blog', data)
    return { success: true, blogId: 'mock-id' }
}

export async function updateBlog(blogId: string, data: any) {
    console.log('Mock: Updating blog', blogId, data)
    revalidatePath('/blogs')
    return { success: true }
}

export async function deleteBlog(blogId: string) {
    console.log('Mock: Deleting blog', blogId)
    revalidatePath('/blogs')
    return { success: true }
}

export async function toggleBlogPublish(blogId: string) {
    console.log('Mock: Toggling publish', blogId)
    revalidatePath('/blogs')
    return { success: true, isPublished: true }
}

export async function toggleBlogFeatured(blogId: string) {
    console.log('Mock: Toggling featured', blogId)
    revalidatePath('/blogs')
    return { success: true, isFeatured: true }
}

export async function likeBlog(blogId: string) {
    console.log('Mock: Liking blog', blogId)
    return { success: true }
}

export async function incrementViews(blogId: string) {
    console.log('Mock: Incrementing views', blogId)
}

export async function addComment(blogId: string, data: any) {
    console.log('Mock: Adding comment to blog', blogId, data)
    return { success: true }
}

export async function deleteComment(commentId: string) {
    console.log('Mock: Deleting comment', commentId)
    return { success: true }
}
