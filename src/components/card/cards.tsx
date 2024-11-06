import { CardSpotlight } from '@/components/ui/card-spotlight';
import { ButtonLink } from '../button/button';
import { ButtonSocmed } from '../button/button-socmed';

export function CardSpotlightDemo() {
  const Link = [
    {
      tittle: 'Personal Website',
      href: 'https://qiblat.my.id',
    },
    {
      tittle: 'Download CV',
      href: 'https://drive.google.com/file/d/1DR7axvvae5UQpvAO52p5aPJC3j0VXslT/view?usp=sharing',
    },
    {
      tittle: 'Medium',
      href: 'https://medium.com/@soimverse',
    },
    // {
    //   tittle: 'Blog',
    //   href: 'https://blog.qiblat.my.id',
    // },
    {
      tittle: 'GitHub',
      href: 'https://github.com/soimalfath',
    },
  ];
  return (
    <CardSpotlight className="flex flex-col justify-center rounded-lg w-[22rem]">
      <div>
        {Link.map((item) => (
          <div key={item.tittle} className="mb-2 w-[296px] ">
            <ButtonLink title={item.tittle} href={item.href} />
          </div>
        ))}
      </div>
      <div className="mt-10 w-full">
        <ButtonSocmed />
      </div>
    </CardSpotlight>
  );
}
