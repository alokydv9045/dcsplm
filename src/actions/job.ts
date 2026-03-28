'use server'

import { revalidatePath } from 'next/cache'

// Mock Job Actions (Removing DB dependency)

export async function createJob(data: any) {
    console.log('Mock: Creating job', data)
    revalidatePath('/careers-at-dcs')
    return { success: true, jobId: 'mock-job-id' }
}

export async function updateJob(jobId: string, data: any) {
    console.log('Mock: Updating job', jobId, data)
    revalidatePath('/careers-at-dcs')
    return { success: true }
}

export async function deleteJob(jobId: string) {
    console.log('Mock: Deleting job', jobId)
    revalidatePath('/careers-at-dcs')
    return { success: true }
}

export async function toggleJobActive(jobId: string) {
    console.log('Mock: Toggling job active', jobId)
    revalidatePath('/careers-at-dcs')
    return { success: true, isActive: true }
}

export async function submitApplication(data: any) {
    console.log('Mock: Submitting application', data)
    return { success: true, applicationId: 'mock-app-id' }
}

export async function updateApplicationStatus(applicationId: string, status: string) {
    console.log('Mock: Updating application status', applicationId, status)
    return { success: true }
}
