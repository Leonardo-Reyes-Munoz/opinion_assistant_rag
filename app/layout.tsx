import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased bg-darkBlue flex flex-col min-h-screen`}
      >
        <main className="flex-grow bg-secondary ">{children}</main>

        <footer className="text-center py-4 bg-gray-900 text-gray-400">
          © {new Date().getFullYear()} Leonardo Reyes. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
