import { Header } from "@/shared/ui/Header/index";
import { Footer } from "@/shared/ui/Footer/ui/Footer";
import '../styles/index.scss';

export const metadata = {
  title: "Vitaliy Frolov",
  description: "Hi, I'm Vitaliy, this is my website with web development work.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang={'ru'} className="app">
      <body className="body">
          <Header />
          <main className="app-content">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
};
