import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cetateck | Cloud Engineering & Enterprise Automation",
  description:
    "Cetateck delivers enterprise-grade Azure & AWS cloud infrastructure, DevOps automation, Microsoft 365 administration, and intelligent workflow solutions for modern organizations.",
  keywords: [
    "cloud engineering",
    "Azure",
    "AWS",
    "DevOps",
    "enterprise automation",
    "Terraform",
    "infrastructure",
    "n8n",
    "Power Automate",
    "Microsoft 365",
    "Kubernetes",
    "CI/CD",
  ],
  authors: [{ name: "Cetateck" }],
  creator: "Cetateck",
  openGraph: {
    title: "Cetateck | Cloud Engineering & Enterprise Automation",
    description:
      "Engineering intelligent cloud infrastructure for enterprise organizations.",
    type: "website",
    locale: "en_US",
    siteName: "Cetateck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cetateck | Cloud Engineering & Enterprise Automation",
    description:
      "Engineering intelligent cloud infrastructure for enterprise organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
