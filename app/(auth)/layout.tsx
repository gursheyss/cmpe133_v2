export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/10">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}
