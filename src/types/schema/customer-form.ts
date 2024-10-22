import * as z from "zod";

export const enquiryFormSchema = z.object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    country: z.string().min(1, { message: "Country is required" }),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }),
    purposeOfEnquiry: z.enum(
        [
            "482 Visa",
            "407 Visa",
            "Skills Assessment",
            "Student Enquiry",
            "Migration Enquiry",
            "186 Visa",
            "General Consultation",
            "PR Pathways",
            "Other",
        ],
        { required_error: "Purpose of enquiry is required" }
    ),
});


export const EnquiryFormSchema = enquiryFormSchema;

