import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { GoogleAnalytics } from "./components/googleanalytics";

export const metadata: Metadata = {
  title: {
    default: "Kronos | Web Design & Development",
    template: "%s | kronos.earth",
  },
  description:
    "A community of developers that build websites and open source solutions for small businesses and startups.",
  openGraph: {
    title: "Kronos | Web Design & Development",
    description:
      " Specializing in the best personal websites and custom web design for small businesses, we bring your vision to life at affordable prices.",
    url: "https://kronos.earth",
    siteName: "Kronos",
    images: [
      {
        url: "https://kronos.earth/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "kronos",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
