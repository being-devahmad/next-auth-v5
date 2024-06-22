import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/providers/next-ui-provider";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { dbConnect } from "@/lib/dbConnect";
import { auth } from "@/auth";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
    title: "NextWhizz",
    description: "Just write your ideass",
};


export default async function RootLayout({ children }) {

    const conn = await dbConnect()
    const session = await auth()
    const userFound = session?.user?.email
    console.log("session-->" + userFound)

    return (

        <html lang="en">
            <body className={poppins.className}>
                <NextUiProvider>
                    <NavbarComponent userFound={userFound} />
                    {children}
                    <FooterComponent />
                </NextUiProvider>
            </body>
        </html>
    );
}
