import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kakatotalk",
  description: "Generated by create next app",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="main">
          <div></div>
        </div> */}
        <header className="py-3"></header>
        <main className="app login">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
