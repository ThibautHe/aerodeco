import {z} from 'zod'

export const FormDataSchema = z.object(
    {
        name: z.string(),
        firstName: z.string(),
        phone: z.string().min(10).optional(),
        email:z.string().email("invalid email"),
        message:z.string().min(6,"Message must be at least 6 charachters."),
        street: z.string(),
        postcode: z.string()

    }
) 