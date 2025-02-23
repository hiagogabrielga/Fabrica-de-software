import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
