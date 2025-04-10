
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body suppressHydrationWarning={true}>
     
          {children}
        
      </body>
    </html>
  );
}
