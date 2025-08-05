import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Providers from "./providers";
import Nav from "@/lib/components/Nav";
import Footer from "@/lib/components/Footer";

import { Container } from "@chakra-ui/react";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Unique Foot",
  description:
    "formal, casual, brogues, sneakers, modern footwear, men's shoes for all occassions. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <Container
            maxW="container.2xl"
            bg="primary.100"
            minH="100vh"
            px={0}
            display="flex"
            flexDirection="column"
          >
            <Nav />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
