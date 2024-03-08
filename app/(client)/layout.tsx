import Footer from "@/components/footer";
import Header from "@/components/header";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div>
      <div className="bg-slate-500">
        <Header />
      </div>
      {children}
      <div className="bg-slate-500">
        <Footer />
      </div>
    </div>
  );
}
