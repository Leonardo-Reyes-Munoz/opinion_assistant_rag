export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-background flex-1 flex flex-col">{children}</section>
  );
}
