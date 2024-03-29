"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import CheckOS from "@/components/check-os";
import SplashScreen from "@/components/splash-screen";
import { useSplashScreen } from "@/store/splash-screen";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isLoadingScreen } = useSplashScreen();

  if (isLoadingScreen) return <SplashScreen />;

  return (
    <>
      <CheckOS />
      <div>
        <div className="flex justify-end">
          <Badge variant="secondary">Beta</Badge>
        </div>

        <Header />

        {children}

        <div className="bg-slate-500">
          <Footer />
        </div>
      </div>
    </>
  );
}
