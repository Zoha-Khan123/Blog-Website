import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar/navbar/navbar'
import Footer from './components/navbar/footer/footer'
import { ThemeContextProvider } from "./components/navbar/context/theme-context";
import ThemeProviders from "./providers/theme-providers";
import AuthProvider from "./providers/AuthProvider";


export const metadata: Metadata = {
  title: "Blog Website",
  description: "The best blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProviders>
        <div className="container">
          <div className="wrapper">
          <Navbar/>
          {children}
          <Footer/>
          </div>
          </div>
          </ThemeProviders>
          </ThemeContextProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
