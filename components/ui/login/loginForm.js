'use client'

import { doCredentialsLogin } from "@/app/actions";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialMediaLogin from "../socialMediaLogin/socialMediaLogin";

export default function LoginForm() {
    const [error, setError] = useState('');
    const router = useRouter();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const response = await doCredentialsLogin(formData);

            if (response?.error) {
                setError(response.error.message);
            } else {
                router.push('/profile');
            }
        } catch (error) {
            console.log("Check your credentials", error);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='text-xl text-red-500'>{error}</div>
            <form className={'w-[500px] py-10 flex flex-col gap-5'} onSubmit={handleFormSubmit}>
                <h1 className='text-4xl text-center'>Login Form</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        className="w-4 h-4 opacity-70">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name="email" className="grow" placeholder="Email" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" name="password" className="grow" placeholder="Password" required />
                </label>
                <div className="flex flex-col items-center justify-center">
                    <Button color={'success'} className="w-full" type="submit">
                        Login
                    </Button>
                </div>
            </form>

            <div>
                <SocialMediaLogin />
            </div>

            <div className="flex justify-center">
                <p className="mt-5">Create new account {' '}
                    <Link href={'/signup'} className="text-red-500">Register here !</Link>
                </p>
            </div>

        </div>
    );
}
