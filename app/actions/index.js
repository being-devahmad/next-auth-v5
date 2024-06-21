// server actions - async functions running on using for form submitting
'use server'

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, {
        redirectTo: '/profile'
    });
    console.log(action);
}

export async function doLogout() {
    await signOut({ redirectTo: '/login' });
}

export async function doCredentialsLogin(formData) {
    try {
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });

        return response;
    } catch (err) {
        console.log("Error during credentials login:", err);
        throw new Error(err.message);
    }
}
