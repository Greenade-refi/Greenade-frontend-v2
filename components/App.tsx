/* eslint-disable @next/next/no-img-element */
import Button from "./common/Button";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full text-center ">
        <div className="flex flex-col items-start justify-center max-w-4xl gap-10 text-left">
          <span className="mt-32 font-black leading-none text-left text-white uppercase select-none text-7xl font-raleway drop-shadow-lg">
            FIGHTING FOR A <br />{" "}
            <span className="text-brand-400">GREENER</span> WORLD
          </span>
          <div className="max-w-xl text-white select-none ">
            A new form of digitized REC designed to accelerate renewable energy
            deployment everywhere where equivalent mechanisms do not currently
            exist.
          </div>

          <Button
            dark={false}
            className="flex items-center gap-2 px-16 font-bold font-raleway"
            onClick={() => router.push("/marketplace")}>
            Marketplace
            <svg
              width="57"
              height="10"
              viewBox="0 0 57 10"
              fill="none"
              className="transition-all transform group-hover:translate-x-2"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M52.25 1.25L56 5M56 5L52.25 8.75M56 5H1"
                stroke="#D6FFBC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
