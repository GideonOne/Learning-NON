import { AppProps } from "next/app";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Home({ Component, pageProps } : AppProps) {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}
