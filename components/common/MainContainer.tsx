import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { useAccount, useBalance } from "wagmi";
import { TOKEN } from "../../hooks/state/constants";

type HomeContainerProps = {
  children: ReactNode;
};

const MainContainer: FC<HomeContainerProps> = ({ children }) => {
  const router = useRouter();
  const { address } = useAccount();
  const balance = useBalance({
    token: TOKEN,
    address,
    watch: true,
  });

  const isHomePage = router.pathname === "/";

  return (
    <>
      <Head>
        <title>Greenade</title>
      </Head>
      <div
        className={`relative flex w-screen h-screen overflow-hidden  bg-fixed ${
          isHomePage
            ? "bg-gradient-to-tr from-brand-800 to-brand-600"
            : "bg-brand-50"
        }  bg-cover font-poppins `}>
        {isHomePage && (
          <>
            <div className="fixed w-screen h-screen bg-gradient-to-bl from-black/70 to-black/0" />
            <div className="fixed right-0 z-20 flex justify-end -bottom-2">
              <div className="w-4/5 animate-wiggle-slow">
                <Image
                  src={"/images/greenade.png"}
                  alt="Sphere"
                  width="1125"
                  height="881"
                />
              </div>
            </div>
          </>
        )}
        {/* 
        {!isHomePage && (
          <div className="fixed flex justify-end transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
            <div className="w-4/5">
              <Image
                src={"/images/greenade.png"}
                alt="Sphere"
                width="1125"
                height="881"
              />
            </div>
          </div>
        )} */}
        <div className="fixed w-screen h-screen bg-fixed bg-cover bg-mosaic" />
        <div
          // className="absolute bottom-0 left-0 mix-blend-hard-light">
          className="absolute -top-4 -right-10 animate-wiggle">
          <Image
            src={"/images/right_leaf.png"}
            alt="Sphere"
            width="259"
            height="201"
          />
        </div>
        <div
          // className="absolute bottom-0 left-0 mix-blend-hard-light">
          className="absolute left-0 -bottom-4 animate-wiggle">
          <Image
            src={"/images/left_leaf.png"}
            alt="Sphere"
            width="259"
            height="201"
          />
        </div>

        {isHomePage && (
          <div className="absolute bottom-0 right-20">
            <svg
              width="728"
              height="70"
              viewBox="0 0 828 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M79.48 37.2C77.4533 33.4667 74.52 30.64 70.68 28.72C66.9467 26.6933 62.52 25.68 57.4 25.68C48.5467 25.68 41.4533 28.6133 36.12 34.48C30.7867 40.24 28.12 47.9733 28.12 57.68C28.12 68.0267 30.8933 76.1333 36.44 82C42.0933 87.76 49.8267 90.64 59.64 90.64C66.36 90.64 72.0133 88.9333 76.6 85.52C81.2933 82.1067 84.7067 77.2 86.84 70.8H52.12V50.64H111.64V76.08C109.613 82.9067 106.147 89.2533 101.24 95.12C96.44 100.987 90.3067 105.733 82.84 109.36C75.3733 112.987 66.9467 114.8 57.56 114.8C46.4667 114.8 36.5467 112.4 27.8 107.6C19.16 102.693 12.3867 95.92 7.48 87.28C2.68 78.64 0.28 68.7733 0.28 57.68C0.28 46.5867 2.68 36.72 7.48 28.08C12.3867 19.3333 19.16 12.56 27.8 7.75999C36.44 2.85333 46.3067 0.399994 57.4 0.399994C70.84 0.399994 82.1467 3.65333 91.32 10.16C100.6 16.6667 106.733 25.68 109.72 37.2H79.48ZM184.075 114L160.715 71.6H154.155V114H126.795V1.68H172.715C181.568 1.68 189.088 3.22666 195.275 6.31999C201.568 9.41333 206.262 13.68 209.355 19.12C212.448 24.4533 213.995 30.4267 213.995 37.04C213.995 44.5067 211.862 51.1733 207.595 57.04C203.435 62.9067 197.248 67.0667 189.035 69.52L214.955 114H184.075ZM154.155 52.24H171.115C176.128 52.24 179.862 51.0133 182.315 48.56C184.875 46.1067 186.155 42.64 186.155 38.16C186.155 33.8933 184.875 30.5333 182.315 28.08C179.862 25.6267 176.128 24.4 171.115 24.4H154.155V52.24ZM684.656 1.68C696.496 1.68 706.843 4.02666 715.696 8.71999C724.55 13.4133 731.376 20.0267 736.176 28.56C741.083 36.9867 743.536 46.7467 743.536 57.84C743.536 68.8267 741.083 78.5867 736.176 87.12C731.376 95.6533 724.496 102.267 715.536 106.96C706.683 111.653 696.39 114 684.656 114H642.576V1.68H684.656ZM682.896 90.32C693.243 90.32 701.296 87.4933 707.056 81.84C712.816 76.1867 715.696 68.1867 715.696 57.84C715.696 47.4933 712.816 39.44 707.056 33.68C701.296 27.92 693.243 25.04 682.896 25.04H669.936V90.32H682.896ZM786.186 23.6V46.32H822.826V67.44H786.186V92.08H827.626V114H758.826V1.68H827.626V23.6H786.186Z"
                fill="url(#paint0_linear_2489_19632)"
              />
              <path
                d="M258.53 23.6V46.32H295.17V67.44H258.53V92.08H299.97V114H231.17V1.68H299.97V23.6H258.53ZM345.093 23.6V46.32H381.733V67.44H345.093V92.08H386.533V114H317.733V1.68H386.533V23.6H345.093ZM504.775 114H477.415L431.655 44.72V114H404.295V1.68H431.655L477.415 71.28V1.68H504.775V114ZM594.528 94.16H552.608L545.888 114H517.248L557.888 1.68H589.568L630.208 114H601.248L594.528 94.16ZM587.488 73.04L573.568 31.92L559.808 73.04H587.488Z"
                fill="url(#paint1_linear_2489_19632)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2489_19632"
                  x1="415.5"
                  y1="569.28"
                  x2="415.5"
                  y2="596.578"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.18" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2489_19632"
                  x1="367.192"
                  y1="-413.469"
                  x2="376.619"
                  y2="319.034"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0776253" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.18" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {!isHomePage && (
          <div className="absolute bottom-0 right-0">
            <svg
              width="619"
              height="65"
              viewBox="0 0 719 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M79.48 37.2C77.4533 33.4667 74.52 30.64 70.68 28.72C66.9467 26.6933 62.52 25.68 57.4 25.68C48.5467 25.68 41.4533 28.6133 36.12 34.48C30.7867 40.24 28.12 47.9733 28.12 57.68C28.12 68.0267 30.8933 76.1333 36.44 82C42.0933 87.76 49.8267 90.64 59.64 90.64C66.36 90.64 72.0133 88.9333 76.6 85.52C81.2933 82.1067 84.7067 77.2 86.84 70.8H52.12V50.64H111.64V76.08C109.613 82.9067 106.147 89.2533 101.24 95.12C96.44 100.987 90.3067 105.733 82.84 109.36C75.3733 112.987 66.9467 114.8 57.56 114.8C46.4667 114.8 36.5467 112.4 27.8 107.6C19.16 102.693 12.3867 95.92 7.48 87.28C2.68 78.64 0.28 68.7733 0.28 57.68C0.28 46.5867 2.68 36.72 7.48 28.08C12.3867 19.3333 19.16 12.56 27.8 7.75999C36.44 2.85333 46.3067 0.399994 57.4 0.399994C70.84 0.399994 82.1467 3.65333 91.32 10.16C100.6 16.6667 106.733 25.68 109.72 37.2H79.48ZM184.075 114L160.715 71.6H154.155V114H126.795V1.68H172.715C181.568 1.68 189.088 3.22666 195.275 6.31999C201.568 9.41333 206.262 13.68 209.355 19.12C212.448 24.4533 213.995 30.4267 213.995 37.04C213.995 44.5067 211.862 51.1733 207.595 57.04C203.435 62.9067 197.248 67.0667 189.035 69.52L214.955 114H184.075ZM154.155 52.24H171.115C176.128 52.24 179.862 51.0133 182.315 48.56C184.875 46.1067 186.155 42.64 186.155 38.16C186.155 33.8933 184.875 30.5333 182.315 28.08C179.862 25.6267 176.128 24.4 171.115 24.4H154.155V52.24ZM258.53 23.6V46.32H295.17V67.44H258.53V92.08H299.97V114H231.17V1.68H299.97V23.6H258.53ZM345.093 23.6V46.32H381.733V67.44H345.093V92.08H386.533V114H317.733V1.68H386.533V23.6H345.093ZM504.775 114H477.415L431.655 44.72V114H404.295V1.68H431.655L477.415 71.28V1.68H504.775V114ZM594.528 94.16H552.608L545.888 114H517.248L557.888 1.68H589.568L630.208 114H601.248L594.528 94.16ZM587.488 73.04L573.568 31.92L559.808 73.04H587.488ZM684.656 1.68C696.496 1.68 706.843 4.02666 715.696 8.71999C724.55 13.4133 731.376 20.0267 736.176 28.56C741.083 36.9867 743.536 46.7467 743.536 57.84C743.536 68.8267 741.083 78.5867 736.176 87.12C731.376 95.6533 724.496 102.267 715.536 106.96C706.683 111.653 696.39 114 684.656 114H642.576V1.68H684.656ZM682.896 90.32C693.243 90.32 701.296 87.4933 707.056 81.84C712.816 76.1867 715.696 68.1867 715.696 57.84C715.696 47.4933 712.816 39.44 707.056 33.68C701.296 27.92 693.243 25.04 682.896 25.04H669.936V90.32H682.896ZM786.186 23.6V46.32H822.826V67.44H786.186V92.08H827.626V114H758.826V1.68H827.626V23.6H786.186Z"
                fill="#007745"
              />
            </svg>
          </div>
        )}

        <div className="flex flex-col w-full h-full">
          <div className="relative z-50 flex flex-col h-full">
            <div className="flex items-center justify-between w-full px-20 py-4 font-semibold">
              <div
                className={`font-extrabold ${
                  isHomePage ? "text-white" : "text-brand-700"
                } uppercase cursor-pointer`}
                onClick={() => router.push("/")}>
                greenade
              </div>
              <div className="flex items-center gap-16">
                <div className="flex items-center gap-10">
                  <Link
                    onClick={() => router.push("/producer")}
                    route="/producer">
                    Producers
                  </Link>
                  <Link
                    onClick={() => router.push("/verifier")}
                    route="/verifier">
                    Verifiers
                  </Link>
                  <Link route="/docs" onClick={() => console.log("clicked")}>
                    Docs
                  </Link>
                </div>
                <div
                  className={`${
                    isHomePage ? "text-grey-300" : "text-grey-700"
                  }`}>
                  {balance.data?.value.toString()} {balance.data?.symbol}
                </div>
                <ConnectButton showBalance={false} />
              </div>
            </div>
            <div className="flex-1 px-20 py-10 overflow-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Link = ({
  children,
  onClick,
  route,
}: {
  children: ReactNode;
  onClick: () => void;
  route: string;
}) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const isActive = router.pathname.includes(route);

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer select-none ${
        isHomePage
          ? "text-brand-100 hover:text-brand-200"
          : isActive
          ? "text-brand-700 "
          : "text-grey-400 hover:text-grey-600"
      }`}>
      {children}
    </div>
  );
};

export default MainContainer;
