import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        default: "Piyush Paul - Projects",
        template: "%s | Piyush Paul"
    },
    description: "Some of my highlighted Projects.",
    openGraph: {
        title: "Piyush Paul - Projects",
        description: "Some of my highlighted Projects",
        type: "website",
        locale: "en_US",
        url: `${process.env.SITE_URL}/projects`,
        siteName: "Piyush Paul - Projects"
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