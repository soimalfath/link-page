import { CardSpotlight } from '@/components/ui/card-spotlight';

export function CardLinks() {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Authentication steps
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Follow these steps to secure your account: ini
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Ensuring your account is properly secured helps protect your personal
        information and data.
      </p>
    </CardSpotlight>
  );
}
