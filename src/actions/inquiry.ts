'use server'

import { revalidatePath } from 'next/cache'

// Mock Inquiry Actions (Removing DB dependency)

export async function updateInquiryStatus(id: string, status: string) {
    console.log('Mock: Updating inquiry status', id, status)
    return { success: true }
}

export async function deleteInquiry(id: string) {
    console.log('Mock: Deleting inquiry', id)
    return { success: true }
}
