import { AppProps } from "next/app";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

export default function Home({ Component, pageProps } : AppProps) {
  return (
    <main>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  );
}
