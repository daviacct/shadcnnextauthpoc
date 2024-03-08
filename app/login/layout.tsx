import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export default async function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession();
    return (
        <html lang="pt-br">
            <body className="bg-gray-800 text-white">
                    <SessionProvider session={session}>
                        {children}
                    </SessionProvider>
            </body>
        </html>
    )
}