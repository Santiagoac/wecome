export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ink-50 py-16 sm:py-20">
      <div className="container-narrow rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink-200/60 sm:p-12">
        {children}
      </div>
    </div>
  );
}
