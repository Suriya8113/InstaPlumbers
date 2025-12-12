import { Open_Sans } from "next/font/google";
import "./globals.css";
import AOSWrapper from './components/AOSWrapper';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: [
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi-bold
    "700", // Bold
    "800", // Extra-bold
  ],
  variable: "--font-open-sans",
});


export const metadata = {
  title: "Instaplumbers",
  description: "Instaplumbers at your service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <AOSWrapper> {children} </AOSWrapper>
       
      </body>
    </html>
  );
;}
