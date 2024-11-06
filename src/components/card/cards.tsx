import { CardSpotlight } from '@/components/ui/card-spotlight';
import { ButtonLink } from '../button/button';

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
    <CardSpotlight className=" gridjustify-center rounded-lg w-96">
      {Link.map((item) => (
        <div key={item.tittle} className="mb-4">
          <ButtonLink title={item.tittle} href={item.href} />
        </div>
      ))}
    </CardSpotlight>
  );
}
