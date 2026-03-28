'use server'

import { revalidatePath } from 'next/cache'

// Mock Settings Actions (Removing DB dependency)

export async function updateSettings(data: any) {
    console.log('Mock: Updating settings', data)
    revalidatePath('/')
    return { success: true }
}

export async function getSettings() {
    // Return mock settings
    return {
        siteName: 'DCS PLM',
        contactEmail: 'info@dcsplm.com',
        contactPhone: '+1 (555) 000-0000',
        address: '123 Life Science Way, Suite 100, Research Triangle Park, NC 27709',
    }
}
