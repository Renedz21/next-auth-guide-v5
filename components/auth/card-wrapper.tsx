"use client"

import { CardWrapperProps } from "@/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "@/components/auth/header"
import { Social } from "@/components/auth/social"
import { BackButton } from "./back-button"

const CardWrapper = ({
    backButtonHref,
    backButtonLabel,
    children,
    headerLabel,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card
            className="w-[400px] shadow-md"
        >
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper