import "./globals.css";

import { Inter, Recursive } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const rrecursive = Recursive({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
  axes: ["CASL", "CRSV", "MONO", "slnt"],
});

const recursive = localFont({
  src: "./Recursive.woff2",
  display: "swap",
  variable: "--font-recursive",
  weight: "300 1000",

  declarations: [
    { prop: "format", value: "woff2" },
    { prop: "weight", value: "300 1000" },
    {
      prop: "unicode-range",
      value:
        "U+0020-007F, U+00A9, U+2190-2193, U+2018, U+2019, U+201C, U+201D, U+2022",
    },
  ],
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
      <script
        async
        type="text/javascript"
        src="/hash-router-redirect.js"
      ></script>
      <body className={rrecursive.variable + " " + inter.className}>
        {children}
      </body>
    </html>
  );
}
