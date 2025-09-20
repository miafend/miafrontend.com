import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Mia Chow - Design Engineer' },
    {
      name: 'description',
      content:
        'Frontend Developer & Design Engineer specializing in React, TypeScript, and modern development. From design to code.',
    },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 flex-col h-svh">
      <h1 className="text-2xl mb-1">Mia Chow</h1>
      <p className="font-bold text-5xl mb-4">Design Engineer</p>
      <p className="text-zinc-500">i make websites from design to code.</p>
    </main>
  );
}
