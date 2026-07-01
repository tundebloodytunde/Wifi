import "./globals.css";

export const metadata = {
  title: "WIfI Calculator",
  description: "Simple WIfI clinical calculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
