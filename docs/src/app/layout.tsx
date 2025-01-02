import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/navbar";
import { MainLinks } from "./components/Navbar/Links";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
    <title>LostMa</title>
  </head>
  <body className="prefers-color-scheme">
    <Header />
    <nav className="bg-primary dark:bg-primary-dark">
      <Navbar links={MainLinks} />
    </nav>
    <main>
      {children}
    </main>
    <Footer />
  </body>
</html>
  );
}
