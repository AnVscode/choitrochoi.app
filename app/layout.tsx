import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import SplashScreen from "@/components/splash-screen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const myFont = localFont({
  src: [
    {
      path: "../fonts/Roboto-Regular.ttf",
      weight: "400",
    },

    {
      path: "../fonts/Roboto-Medium.ttf",
      weight: "500",
    },

    {
      path: "../fonts/Roboto-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chơi Trò Chơi Apps",
  description: "Chào mừng đến với chơi trò chơi",
  icons: "/next.svg",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi">
      <body
        className={cn("font-sans font-normal antialiased", myFont.variable)}
      >
        <Analytics />
        <SpeedInsights />
        <SplashScreen>
          {children}
          <div className="mt-2 flex justify-center bg-slate-300">
            beta version
          </div>
        </SplashScreen>
      </body>
    </html>
  );
}
