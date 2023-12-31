"use client"

import { useRouter } from "next/navigation"
import { LoginButtonProps } from "@/types"

const LoginButton = ({ children, asChild, mode = 'redirect' }: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push('/auth/login')
    }

    if (mode === 'modal') {
        //TODO IMPLEMENT MODAL
    }

    return (
        <span
            className="cursor-pointer"
            onClick={onClick}
        >
            {children}
        </span>
    )
}

export default LoginButton