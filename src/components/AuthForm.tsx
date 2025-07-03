"use client"
import { useRouter } from 'next/router';
import React from 'react'

type Props = {
    type: "login" | "signUp"
}

function AuthForm({ type }: Props) {
    const isLoginForm = type === "login";
    
    const router = useRouter();
    // const handleSubmit = [formData: FormData] => {
    //     console.log("form submitted");
    // }
    // return (
    //     <form action={handleSubmit}>AuthForm</form>
    // )
}

export default AuthForm