import clsx from 'clsx';
import { MouseEvent, useState, SyntheticEvent } from 'react';
import { CenteredLayout } from '~/components';
import { MouseIcon, CrossIcon, SendIcon } from '~/pages/annotations';
import css from './Annotation.module.scss';

export const Annotations = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  console.log(dimensions);
  const handleDimensions = (e: SyntheticEvent<HTMLImageElement>) => {
    setDimensions({
      height: e.currentTarget.naturalHeight,
      width: e.currentTarget.naturalWidth,
    });
  };

  const [annotation, setAnnotation] = useState({ isActive: false, x: 0, y: 0 });

  const handleClick = (e: MouseEvent) => {
    setAnnotation({
      ...annotation,
      isActive: false,
    });

    if (!annotation.isActive) {
      setAnnotation({
        isActive: true,
        x: (e.nativeEvent.offsetX / dimensions.width) * 100,
        y: (e.nativeEvent.offsetY / dimensions.height) * 100,
      });
    }
  };

  const [isTransitionEnd, setIsTransitionEnd] = useState(false);
  const handleTransitionEn = () => {
    setIsTransitionEnd(true);
  };

  return (
    <div className="flex-1 bg-[#1E1E1E] flex">
      <CenteredLayout className="justify-center max-w-screen-lg 2xl:max-w-screen-xl mx-auto text-white gap-8 my-8">
        <header className="flex justify-between w-full px-4">
          <h2 className="text-2xl font-bold">File name</h2>
          <button className="text-neutral-900 bg-neutral-400 px-6 py-2 rounded text-base font-semibold hover:bg-neutral-300 active:scale-95">
            Upload Image
          </button>
        </header>
        <main className="bg-[#2A2A2A] flex max-h-xl justify-center align-center w-full">
          <div className="relative flex">
            <img
              onClick={handleClick}
              onLoad={handleDimensions}
              loading="lazy"
              src="https://images.unsplash.com/photo-1566918230681-eef79dfc668b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
              // src="https://images.unsplash.com/photo-1566244373908-15be37645de4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="A classical palace under a sunny weather"
              className={clsx(
                'object-contain min-h-[535px]',
                annotation.isActive ? 'cursor-auto' : 'cursor-cell',
              )}
            />

            <div
              className={clsx(
                css.annotation,
                'Annotation text-slate-200 drop-shadow',
                annotation.isActive ? css.fadeIn : css.fadeOut,
                isTransitionEnd ? 'hidden' : 'flex',
              )}
              style={{ left: annotation.x + '%', top: annotation.y + '%' }}
            >
              <p className="font-bold">1</p>
              <form
                className={clsx(
                  'absolute -translate-x-1/2 -translate-y-1/2 top-[84px] left-[50%]',
                  'flex justify-between gap-[24px] min-w-[360px] px-6 py-4 text-neutral-900 text-sx',
                  'bg-white drop-shadow border-[1px] border-solid border-[#EFEFF0] rounded',
                )}
              >
                <div className="absolute -top-[4px] left-[50%] -translate-x-1/2 -translate-y-1/2  border-l-[10px] border-l-transparent border-b-[12px] border-b-white border-r-[10px] border-r-transparent" />
                <input
                  placeholder="Leave a comment"
                  className="w-full p-1 text-sm border-b-[2px] border-b-[#C9CBD0] outline-none"
                />
                <button
                  type="submit"
                  className="p-2 rounded-full hover:bg-neutral-200 active:bg-neutral-300"
                >
                  <SendIcon />
                </button>
              </form>
            </div>
          </div>
        </main>
        <footer className="text-xs md:text-base self-start text-[#909090] px-4">
          <p>
            To leave a comment, mouseover
            <CrossIcon />
            on an image and click the left mouse button <MouseIcon />
          </p>
        </footer>
      </CenteredLayout>
    </div>
  );
};
