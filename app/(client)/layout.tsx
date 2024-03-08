import Footer from "@/components/footer";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import CheckOS from "./home/components/check-os";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
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
