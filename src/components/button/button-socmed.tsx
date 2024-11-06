import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconMail,
} from '@tabler/icons-react';

export function ButtonSocmed() {
  const links = [
    {
      title: 'Facebook',
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.facebook.com/soimalfath',
    },

    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.instagram.com/soim_fath/',
    },
    {
      title: 'Linkedln',
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.linkedin.com/in/soim-alfath/',
    },

    {
      title: 'X',
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://x.com/mbuhsapaaaaa',
    },
    {
      title: 'Email',
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'mailto:soimkmpbg@gmail.com',
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}
