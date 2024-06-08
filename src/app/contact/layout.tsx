import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        default: "Piyush Paul - Contact",
        template: "%s | Piyush Paul"
    },
    description: "Contact us for more infromation."
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