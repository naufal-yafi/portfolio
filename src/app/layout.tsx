import "@/style/globals.css";
import Footer from "@partial/Footer";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 text-neutral-50 overflow-x-hidden ${inter.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
