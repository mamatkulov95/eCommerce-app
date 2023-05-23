import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "../styles/globals.css";
// import { Dropdown, Ripple, initTE } from "tw-elements";
// initTE({ Dropdown, Ripple });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
