import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export const metadata = {
  title: "Javco",
  description:
    "The best place to find trailers at an affordable price. If you are looking for a semi-trailer in the Wisconsin area, this is the place to come. We have a variety of trailers from dry vans, reefers, flatbeds, tankers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Head>
           <meta name="description" content={metadata.description} />
        <link rel="stylesheet" as="style" href="/_next/static/css/15cbae759d1218d5.css"></link>
        {/* Other meta tags, title, etc. can go here */}
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
