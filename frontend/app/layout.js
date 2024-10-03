import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Podcast Website",
  description: "Podcast Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Podcast Website</title>
        <meta property="og:description" content="Podcast Website" />
        <meta property="og:title" content="Podcast Website" />
      </Head>
      <body>
        <h1 style={{ display: "none" }}>Podcast Website</h1>
        {children}
      </body>
    </html>
  );
}
