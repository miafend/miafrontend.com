import type { Route } from './+types/home';
import Navbar from '~/components/navbar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Mia Chow - Design Engineer' },
    {
      name: 'description',
      content:
        'Frontend Developer & Design Engineer specializing in React, TypeScript, and modern development. From design to code. Specialized in web animation',
    },
  ];
}

export default function Home() {
  return (
    <main className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-between h-svh items-center py-8 sm:py-12 lg:py-16">
        <header className="flex w-full justify-between">
          <a className="text-2xl hover:underline" href="/">
            Mia Chow
          </a>
          <Navbar />
        </header>

        <div className="self-start flex flex-col gap-8 text-lg text-secondary max-w-sm tracking-tight">
          <div>
            <p>
              i make websites from{' '}
              <span className=" text-foreground">**design**</span> to{' '}
              <span className="text-foreground">&lt;code&gt;</span>,
            </p>
            <p>
              capable of delivering Apple-level{' '}
              <span className="text-foreground">motion design</span>.
            </p>
          </div>
          <div>
            <p>currently available for freelance jobs.</p>
            <p>
              reach me out at{' '}
              <span className="text-primary">miafrontend@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex text-lg justify-between text-secondary text-nowrap lowercase">
            <p>ui/ux designer</p>
            <p>+</p>
            <p>frontend developer</p>
          </div>
          <div className="font-bold text-[12vw] md:text-[10vw] lg:text-8xl flex justify-between space-x-3">
            <p>Design</p>
            <p>Engineer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
