import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "../components/ErrorReporter";
import Script from "next/script";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "KI & Analytics Consulting | Nicole Thorisch",
  description: "Ich unterstütze den Mittelstand dabei, KI-Workflows, interne Assistenzsysteme und Frühwarn-Analytics zuverlässig umzusetzen — mit Validierung, Audit Trail und klarer Einführung in wenigen Wochen.",
  keywords: "KI Consulting, KI Beratung Mittelstand, Machine Learning, Frühwarnsysteme, Business Intelligence, München",
  openGraph: {
    title: "KI & Analytics Consulting | Nicole Thorisch",
    description: "Medizinisch präzise, planbar geliefert. KI-Workflows und Analytics für den Mittelstand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="ebddd4d1-529f-4f5c-8cf9-5c0783c3927a"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
