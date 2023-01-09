import clsx from 'clsx';
import { MouseEvent } from 'react';
import { CenteredLayout } from '~/components';
import { MouseIcon, CrossIcon } from '~/pages/annotations';

export const Annotations = () => {
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    console.log('x: ', e, 'y: ', e);
  };

  return (
    <div className="flex-1 bg-[#1E1E1E] flex">
      <CenteredLayout className="flex-1 max-w-screen-lg 2xl:max-w-screen-xl mx-auto text-white gap-8 my-8">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl font-bold">File name</h2>
          <button className="text-neutral-900 bg-neutral-400 px-6 py-2 rounded text-base font-semibold hover:bg-neutral-300 active:scale-95">
            Upload Image
          </button>
        </div>
        <div className="bg-[#2A2A2A] flex md:flex-1 max-h-xl justify-center w-full">
          <img
            onMouseMove={handleMouseMove}
            loading="lazy"
              src="https://images.unsplash.com/photo-1566918230681-eef79dfc668b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
            // src="https://images.unsplash.com/photo-1566244373908-15be37645de4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Sunset behind the sea"
            className="object-contain"
          />
        </div>
        <p className="text-xs md:text-base self-start text-[#909090]">
          To leave a comment, mouseover
          <CrossIcon />
          on an image and click the left mouse button <MouseIcon />
        </p>
      </CenteredLayout>
    </div>
  );
};
