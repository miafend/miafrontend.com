const socials = [
  { social: 'github', link: 'https://github.com/miafend' },
  { social: 'x', link: 'https://x.com/miafrontend' },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {socials.map((social) => (
          <li
            key={social.social}
            className="before:content-['-'] before:mr-1 text-xl hover:underline text-secondary"
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.social}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
