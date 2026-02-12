import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SULÉGYM — Coming Soon",
  description: "SULÉGYM - 곧 당신의 운동이 설레짐니다.",
  openGraph: {
    title: "SULÉGYM — Coming Soon",
    description: "곧 당신의 운동이 설레짐니다.",
    type: "website",
    url: "https://www.sulegym.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
