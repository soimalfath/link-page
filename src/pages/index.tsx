import Image from "next/image";
// import localFont from 'next/font/local';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Tittle } from "@/components/text/tittle";
import { CardSpotlightDemo } from "@/components/card/cards";
import Head from "next/head";
import { ButtonSocmed } from '@/components/button/button-socmed';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Soim Alfath Link</title>
        </Head>
      </div>
      <BackgroundLines className="grid w-full items-center px-4">
        <div>
          <div className="justify-center mb-2 flex">
            <Image
              alt="profile"
              width={110}
              className="flex justify-center rounded-full"
              height={110}
              src="https://avatars.githubusercontent.com/u/117827510?v=4"
            ></Image>
          </div>
          <div className="text-center mt-3 text-2xl font-semibold">
            Soim Alfath
          </div>
          <Tittle />
          <div className="flex items-center flex-col justify-center">
            <div className="mb-5 w-full">
              <ButtonSocmed />
            </div>
            <CardSpotlightDemo />
          </div>
          <div className="flex justify-center mt-10">Made with ❤️ by Soim</div>
        </div>
      </BackgroundLines>
    </div>
  );
}
