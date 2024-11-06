import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
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
      title: 'Tiktok',
      icon: (
        <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.tiktok.com/@sookiim?_t=8rAIPyXeTOq&_r=1',
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}
