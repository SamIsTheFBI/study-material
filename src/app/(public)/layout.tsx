import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header";
import Dock from "@/components/layout/dock";
import GridPattern from "@/components/layout/grid-pattern";

export const metadata: Metadata = {
  title: "PadhaiKarle.",
  description: "Share notes with your collegemates",
};

export default function RootLayout({
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
          <Dock />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
