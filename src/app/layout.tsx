import "./globals.css";

import { Inter, Recursive } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], display: "swap", axes: ["slnt"] });
const recursive = Recursive({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
  axes: ["CASL", "CRSV", "MONO", "slnt"],
});

export const metadata = {
  title: "javlocan.dev",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {" "}
        <script
          async
          type="text/javascript"
          src="/hash-router-redirect.js"
        ></script>
      </head>

      <body className={recursive.variable + " " + inter.className}>
        {children}
      </body>
    </html>
  );
}
