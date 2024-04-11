import { Montserrat, Lalezar } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Nav/navbar";
import Footer from "./components/footer/footer";
import { ThemeProvider} from "@/Context/themecontext";

const fontBoddy = Montserrat({ subsets: ["latin"] ,weight:['400','900','700']});
const lalezar = Lalezar({ subsets: ["arabic"] ,
                weight:['400']});

export const metadata = {
  title: "E-commerce ITCA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={fontBoddy.className}>
      <ThemeProvider>
      <div className="container">

      <Navbar/>
      
      
      
      {children}
      
      <Footer/>
      </div>
      </ThemeProvider>
      
      </body>
    </html>
  );
}
