"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


function LogoutButton() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const errMessage = "oops something went wrong!"
    const handleLogOut = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const errMessage = null;

        if(!errMessage){
          toast("Logged out", {
            description: "You have been successfully logged out!",
          })
          router.push("/");
        }else{
             toast("Error", {
            description: errMessage,
          })
        }
        setLoading(false);
    }

  return (
    <Button variant="outline"
    onClick={handleLogOut}
    disabled={loading}
    className="w-24">{loading ? <Loader2  className="animate-spin"/> : "Log Out"} </Button>
  )
}

export default LogoutButton