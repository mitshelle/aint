import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Tabs } from "@radix-ui/react-tabs";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "AINT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
          </div>
          <Tabs></Tabs>
        </ThemeProvider>
      </body>
    </html>
  );
}
