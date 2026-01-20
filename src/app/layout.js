import { Montserrat, Contrail_One } from "next/font/google";
import "./globals.css";

// Fuente para textos generales
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Fuente para Logotipo y Títulos grandes
const contrailOne = Contrail_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-contrail",
});

export const metadata = {
  title: "Delta Time",
  description: "F1 Foro y Noticias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${contrailOne.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}