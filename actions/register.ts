"use server";

import * as z from 'zod'
import * as bcrypt from 'bcryptjs';
import { registerSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';


export const register = async (values: z.infer<typeof registerSchema>) => {

    const validatedFields = registerSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid email or password."
        };
    }

    const { email, name, password } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: "User already exists."
        }
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    })

    return {
        success: "User created!"
    }

}