import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}


