import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Hello Home Page</h1>
      <Link href={`/chat`}>Enter Chat</Link>
    </>
  );
}
