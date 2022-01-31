import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/ui/Layout";

import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0, viewport-fit:cover"
        />
        <base href="/" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>Timeling</title>
        <meta name="description" content="Life is short, let's meet up." />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
      window.addEventListener("load", function (ev) {
        window.requestAnimationFrame(function () {
          var s = document.createElement("script");
          s.src =
            location.protocol +
            "//" +
            location.host +
            "/scripts/pwacompat.min.js";
          s.setAttribute("crossorigin", "anonymous");
          document.head.appendChild(s);
        });
      });`,
          }}
        />
        <meta
          name="facebook-domain-verification"
          content="ve5q3qy1q60ira2gjd55puuobi5udz"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-P2FQ5J2");`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-209671318-1"
        ></script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-209671318-1", { anonymize_ip: true });
      gtag("config", "AW-10785514455", { anonymize_ip: true });
    `,
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `!(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.agent = "plwebflow";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "119888977026940");
      fbq("track", "PageView");`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P2FQ5J2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
