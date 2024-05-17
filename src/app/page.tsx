import { AppProps } from "next/app";
import Main from "../../components/main/main";
import CustomLayout from "./customLayout";

export default function Home({ Component, pageProps } : AppProps) {
  return (
    <CustomLayout>
      <Main/>
    </CustomLayout>
  );
}
