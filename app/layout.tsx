import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SparkEduTech",
  description: "Sparkedutech website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-light100 px-5 ${inter.className}`}>
        <Container>
          <Navbar />
          <div>{children}</div>
        </Container>
      </body>
    </html>
  );
}
