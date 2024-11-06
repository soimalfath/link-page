'use client';
import React from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
// import { IconAppWindow } from '@tabler/icons-react';
import { ButtonLink } from '../button/button';

export function CardLink() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-6 bg-white dark:bg-zinc-900">
        <div>
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
          <ButtonLink />
        </div>
      </BackgroundGradient>
    </div>
  );
}
