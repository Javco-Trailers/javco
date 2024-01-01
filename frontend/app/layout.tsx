export const metadata = {
  title: 'Javco',
  description: 'The best place to find trailers at an affordable price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
