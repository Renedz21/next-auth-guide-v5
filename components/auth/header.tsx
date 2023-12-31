import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { HeaderProps } from "@/types"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["600"]
})

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="flex w-full flex-col gap-y-4 items-center justify-center">
            <h1
                className={cn("text-3xl font-semibold", poppins.className)}
            >
                Auth
            </h1>
            <p
                className="text-muted-foreground text-sm"
            >
                {label}
            </p>
        </div>
    )
}