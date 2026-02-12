/**
 * 루트 레이아웃 — 전역 메타데이터, 폰트, 스타일 설정
 */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/**
 * Montserrat 폰트 설정
 * next/font/google을 사용하여 빌드 시 폰트를 최적화하고
 * 외부 네트워크 요청 없이 로드 (CLS 방지)
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sulegym.com"),
  title: "SULÉGYM — Coming Soon",
  description: "SULÉGYM - 곧 당신의 운동이 설레짐니다.",
  openGraph: {
    title: "SULÉGYM — Coming Soon",
    description: "곧 당신의 운동이 설레짐니다.",
    type: "website",
    url: "https://www.sulegym.com",
    images: [
      {
        url: "/images/logo-banner.png",
        alt: "SULÉGYM",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={montserrat.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
