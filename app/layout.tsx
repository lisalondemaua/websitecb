import { Poppins } from "next/font/google";
import './globals.css';

const poppins = Poppins({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],          
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Interieurarchitecte Corinne Bock",
  description: "Portfolio van Corinne Bock, interieurarchitecte.",
};


