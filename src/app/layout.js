import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // 1. IMPORTAMOS

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Delta Time F1",
  description: "Noticias y actualidad de Fórmula 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans bg-black text-white antialiased`}>
        <Header />  
        {children}
      </body>
    </html>
  );
}