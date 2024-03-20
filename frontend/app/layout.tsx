import { Analytics } from "@vercel/analytics/react";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
