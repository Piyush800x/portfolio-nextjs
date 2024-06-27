import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        default: "Piyush Paul - Contact",
        template: "%s | Piyush Paul"
    },
    description: "Contact me for more infromation.",
    openGraph: {
        title: "Piyush Paul - Contact",
        description: "Contact me to fulfill your quaries",
        type: "website",
        locale: "en_US",
        url: `${process.env.SITE_URL}/contact`,
        siteName: "Piyush Paul - Contact"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}