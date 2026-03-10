'use client';

import { SendHorizontal } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const mailParams = {
  email: 'self@leancontinuo.com',
  subject: 'Hola, me da curiosidad…',
  body: 'Hey,\n\n\n',
};

const mailToHref = `mailto:${mailParams.email}?subject=${encodeURIComponent(mailParams.subject)}&body=${encodeURIComponent(mailParams.body)}`;

export default function FooterButtons() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 order-0 md:order-none shrink-0">
      <a
        href={mailToHref}
        className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
        aria-label="Send email"
        title="Send email"
      >
        <SendHorizontal className="w-6 h-6" />
      </a>
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
