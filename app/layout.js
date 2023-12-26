import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Membership Commerce",
  description: "Created by JYTech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Script src="//cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="//code.tidio.co/buulmo8u08xlydrmpe5v8a9emkezcz17.js" async />
    </html>
  );
}
