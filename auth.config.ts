import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

import { loginSchema } from '@/schemas'
import { getUserByEmail } from './data/user'
import * as bcrypt from 'bcryptjs'


export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials);
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email);

                    if (!user || !user.password) return null;

                    const isValidPassword = await bcrypt.compare(password, user.password);

                    if (isValidPassword) return user;
                }
                return null;
            }
        }),
    ],
} satisfies NextAuthConfig