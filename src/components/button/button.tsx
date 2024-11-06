'use client';
import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

type ButtonLinkProps = { title: string; href: string };

export function ButtonLink({ title, href }: ButtonLinkProps) {
  const openLink = () => {
    window.open(href, '_blank');
  };
  return (
    <div className="w-max-full w-full flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full w-full"
        as="button"
        onClick={() => openLink()}
        className="dark:bg-black  bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
