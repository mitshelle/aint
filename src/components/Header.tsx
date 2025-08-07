import { shadow } from '@/styles/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import DarkModeToggle from './DarkModeToggle';
import { Toaster } from 'sonner';
import { getUser } from '@/auth/server';
import LogOutButton from './LogOutButton';

async function Header() {
    const user = await getUser();
    return (
        <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow,
            }}
        >

            <Link href="/" className="flex items-end">
                <Image
                    src="/android-chrome-512x512.png"
                    height={90}
                    width={90}
                    alt="logo"
                    className="rounded-full"
                    priority
                />
                <h1 className="flex flex-col pb-7 text-2xl font-semibold ">AINT</h1>
            </Link>
            <div className="flex gap-4">
            { user ? <LogOutButton /> :  
            
            <>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
            </Button>
            </>
            }
            <DarkModeToggle />
            </div>
        </header>
    )
}

export default Header