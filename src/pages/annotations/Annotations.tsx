import clsx from 'clsx';
import { CenteredLayout } from '~/components';
import { MouseIcon, CrossIcon } from '~/pages/annotations';

export const Annotations = () => {
  return (
    <div className="flex-1 bg-[#1E1E1E] flex">
      <CenteredLayout className="flex-1 max-w-screen-xl mx-auto text-white gap-8 my-8">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl font-bold">File name</h2>
          <button className="text-neutral-900 bg-neutral-400 px-6 py-2 rounded text-base font-semibold hover:bg-neutral-300 active:scale-95">
            Upload Image
          </button>
        </div>
        <div className="bg-[#2A2A2A] w-full flex-1 max-h-xl justify-center">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Sunset behind the sea"
            className="object-contain w-3/5 mx-auto"
          />
        </div>
        <p className="self-start text-[#909090]">
          To leave a comment, mouseover
          <CrossIcon />
          on an image and click the left mouse button <MouseIcon />
        </p>
      </CenteredLayout>
    </div>
  );
};
