import clsx from 'clsx';
import { useState, SyntheticEvent, MouseEvent } from 'react';
import { useIsNewAnnotation, useNewAnnotationData } from './context';

export const Image = () => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const [isNewAnnotation, setIsNewAnnotation] = useIsNewAnnotation();
  const [newAnnotation, setNewAnnotation] = useNewAnnotationData();

  const handleDimensions = (e: SyntheticEvent<HTMLImageElement>) =>
    setDimensions({
      height: e.currentTarget.naturalHeight,
      width: e.currentTarget.naturalWidth,
    });

  const addAnnotationHandler = (e: MouseEvent) => {
    setIsNewAnnotation(false);

    if (!isNewAnnotation) {
      setIsNewAnnotation(true);
      setNewAnnotation({
        ...newAnnotation,
        x: e.nativeEvent.offsetX / dimensions.width,
        y: e.nativeEvent.offsetY / dimensions.height,
      });
    }
  };

  return (
    <img
      className={clsx(
        'object-contain min-h-[535px]',
        isNewAnnotation ? 'cursor-auto' : 'cursor-cell',
      )}
      onClick={addAnnotationHandler}
      onLoad={handleDimensions}
      loading="lazy"
      src="https://images.unsplash.com/photo-1566918230681-eef79dfc668b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
      alt="A classical palace under a sunny weather"
    />
  );
};
