import Link from 'next/link';
import { oleoScript } from './lib/fonts.js';
import { Button } from '@headlessui/react';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col text-center items-center justify-center bg-black">
      <div className="">
        <h1
          className={` ${oleoScript.className} text-3xl font-bold text-background oleoScript.className`}
        >
          Welcome to the{' '}
        </h1>
        <h1 className={`text-4xl font-bold text-background`}>
          Supreme Court Opinion Assistant
        </h1>
        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 font-semibold text-white shadow-inner shadow-white/10 data-true hover:bg-primary mt-8">
          <Link href={`/chat`}>Enter Chat</Link>
        </Button>
      </div>
    </div>
  );
}
