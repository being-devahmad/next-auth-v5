import { auth } from '@/auth';
import LogoutForm from '@/components/ui/logout/logoutForm';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {
    try {
        const session = await auth();

        // If no user is authenticated, redirect to the login page
        if (!session?.user) {
            redirect('/login');
            return null;
        }

        return (
            <div className='flex flex-col items-center m-4'>
                {
                    session?.user?.image && session?.user?.name ? (
                        <>
                            <h1 className='text-5xl my-2'>
                                Welcome , {session?.user?.name}
                            </h1>
                            <Image
                                src={session?.user?.image}
                                alt={session?.user?.name}
                                width={72}
                                height={72}
                                className='rounded-full'
                            />
                        </>
                    ) : (
                        <>
                            <h1 className='text-5xl my-2'>
                                Welcome , {session?.user?.email}
                            </h1>
                        </>
                    )
                }

                <LogoutForm />
            </div>
        );
    } catch (error) {
        console.error('Error fetching session:', error)
        return (
            <div className='flex flex-col items-center m-4'>
                An error occurred. Please try again later.
            </div>);
    }
};

export default ProfilePage;
