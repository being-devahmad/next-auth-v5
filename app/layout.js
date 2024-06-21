import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/providers/next-ui-provider";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { dbConnect } from "@/lib/dbConnect";

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

    return (

        <html lang="en">
            <body className={poppins.className}>
                <NextUiProvider>
                    <NavbarComponent />
                    {children}
                    <FooterComponent />
                </NextUiProvider>
            </body>
        </html>
    );
}
