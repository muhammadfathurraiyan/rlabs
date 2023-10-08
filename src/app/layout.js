import "./globals.css";
import { Poppins } from "next/font/google";
import Wrapper from "@/components/global/Wrapper";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
// import Favicon from "../../public/favicon.ico"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "RLabs",
  description: "Raiyan's little laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
