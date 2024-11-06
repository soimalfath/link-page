'use client';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
export function Tittle() {
  const words = [
    {
      text: 'FrontEnd',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Developer',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: '|',
    },
    {
      text: 'Digital',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Marketer',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffectSmooth cursorClassName="h-6" words={words} />
    </div>
  );
}
