import { EMAIL } from '~/lib/constants';
import type { Route } from './+types/home';
import { useLocation } from 'react-router';
import { cn } from '~/lib/utils';

const links = [
  { name: 'home', link: '/' },
  { name: 'github', link: 'https://github.com/miafend' },
  { name: 'x', link: 'https://x.com/miafrontend' },
];

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

export function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {links.map((link) => {
          const isActive = location.pathname === link.link;
          const isExternal = link.link.startsWith('http');

          return (
            <li
              key={link.name}
              className={cn(
                "font-light before:mr-1 before:content-['-'] hover:underline lg:text-lg",
                isActive ? 'text-foreground' : 'text-secondary',
              )}
            >
              <a
                href={link.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden px-6 lg:px-12">
      {/* Hero Section */}
      <section className="relative flex h-svh flex-col items-start justify-between py-4 sm:py-6 lg:py-12">
        <header className="flex w-full justify-between">
          <a className="text-2xl" href="/">
            Mia Chow
          </a>
          <Navbar />
        </header>

        <div className="text-secondary flex max-w-prose flex-col space-y-6 font-light lg:text-lg">
          <div className="size-20">
            <img
              src="/avatar.png"
              alt="Mia Chow"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <p>
              i make websites from{' '}
              <span className="text-foreground">**design**</span> to{' '}
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

        <div className="flex w-full flex-col">
          <div className="text-secondary flex justify-between font-light text-nowrap lowercase lg:text-lg">
            <p>ui/ux designer</p>
            <p>+</p>
            <p>frontend developer</p>
          </div>
          <div className="flex justify-between space-x-3 text-[12vw] leading-none font-bold lg:text-[8rem]">
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
