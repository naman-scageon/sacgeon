import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full relative">
      <Header />
      <main className="flex-grow mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}
