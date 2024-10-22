'use server'

import db from '@/db/db'
import { generalEnquiry } from '@/db/schema'
import { NewEnquiry } from '@/db/schema/general-enquiry' 

export async function createEnquiry(data: NewEnquiry) {
    try {
        const result = await db.insert(generalEnquiry).values({
            fullName: data.fullName,
            email: data.email,
            country: data.country,
            phoneNumber: data.phoneNumber,
            purposeOfEnquiry: data.purposeOfEnquiry,
        }).returning()

        return { success: true, data: result[0] }
    } catch (error) {
        console.error('Failed to create enquiry:', error)
        return { success: false, error: 'Failed to create enquiry' }
    }
}