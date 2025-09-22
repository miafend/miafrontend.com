import { useLocation } from 'react-router';
import { cn } from '~/lib/utils';

const links = [
  { name: 'home', link: '/' },
  { name: 'github', link: 'https://github.com/miafend' },
  { name: 'x', link: 'https://x.com/miafrontend' },
];

export default function Navbar() {
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
                "before:content-['-'] before:mr-1 text-lg lg:text-xl font-light hover:underline",
                isActive ? 'text-foreground' : 'text-secondary'
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
