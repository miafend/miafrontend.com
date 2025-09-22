import { EMAIL } from '~/lib/constants';
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
    <main className="w-full max-w-7xl mx-auto px-6 lg:px-12 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col h-svh items-start py-4 sm:py-6 lg:py-12 justify-between">
        <header className="flex w-full justify-between">
          <a className="text-2xl" href="/">
            Mia Chow
          </a>
          <Navbar />
        </header>

        <div className="flex flex-col space-y-6 text-lg lg:text-xl text-secondary max-w-prose font-light">
          <div className="size-20">
            <img
              src="/avatar.png"
              alt="Mia Chow"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p>
              i make websites from{' '}
              <span className=" text-foreground">**design**</span> to{' '}
              <span className="text-foreground">&lt;code /&gt;</span>,
            </p>
            <p>
              delivering Apple-level{' '}
              <span className="text-foreground">web animation</span>{' '}
              experiences.
            </p>
          </div>
          <div>
            <p>
              currently <span className="text-foreground">available</span> for
              freelance projects,
            </p>
            <p>
              reach me out at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col -space-y-4">
          <div className="flex text-lg lg:text-xl justify-between text-secondary text-nowrap lowercase font-light">
            <p>ui/ux designer</p>
            <p>+</p>
            <p>frontend developer</p>
          </div>
          <div className="font-bold text-[12vw] lg:text-[10vw] flex justify-between space-x-3">
            <div className="mr-[2vw]">Design</div>
            <div>Engineer</div>
          </div>
        </div>
      </section>

      {/* Glass Overlay */}
      <div aria-hidden="true" className="glass-overlay"></div>
    </main>
  );
}
