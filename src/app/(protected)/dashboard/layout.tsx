import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header";
import { checkAuth } from "@/server/auth/utils";
import { Toaster } from "@/components/ui/toaster";
import GridPattern from "@/components/layout/grid-pattern";

export const metadata: Metadata = {
  title: "Dashboard | PadhaiKarle.",
  description: "Your dashboard to share notes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="pb-12">
            <Header />
          </div>
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:linear-gradient(to_top,white,transparent,transparent)] fixed -z-10",
            )}
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
