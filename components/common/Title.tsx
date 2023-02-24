import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const Title = ({
  children,
  goBack = false,
}: {
  children: ReactNode;
  goBack?: boolean;
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 text-2xl font-bold text-brand-700">
      {goBack && (
        <svg
          onClick={() => router.back()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.75 15.75L3 12M3 12L6.75 8.25M3 12H21"
            stroke="#007745"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {children}
    </div>
  );
};

export default Title;
