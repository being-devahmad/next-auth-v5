import {z} from 'zod';

export const userValidation = z.object({
    username: z
        .string()
        .min(2, 'Username must be at least 2 characters')
        .max(20, 'Username must be no longer than 20 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain any special characters'),
    email: z
        .string()
        .email({message: 'Invalid email address'}),
    password: z
        .string()
        .min(6, {message: 'Password must be at least 6 characters long'})
})