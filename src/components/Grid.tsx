import React from "react";

export default function Grid(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div className="flex justify-center w-full z-0">
      <div className="grid grid-cols-[repeat(6,calc((100vw-48px)/6))] grid-rows-[repeat(4,calc((100vw-48px)/6))] pb-px desktop:grid-cols-[repeat(6,240px)] desktop:grid-rows-[repeat(4,240px)]">
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="relative flex size-full flex-col items-center justify-center border"></div>
        <div className="dekstop:p-20 col-span-4 col-start-2 lg:col-span-2 lg:col-start-3 row-span-2 row-start-2 ml-px mt-px flex size-[calc(100%-1px)] flex-col items-center justify-center gap-6 bg-siteBackground p-2 text-center desktop:col-span-2 desktop:col-start-3 desktop:row-span-2 desktop:row-start-2 desktop:p-10">
          <div className="flex flex-col gap-2 lg:gap-4">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
