import clsx from 'clsx';
import { useState, SyntheticEvent, MouseEvent, Dispatch, SetStateAction } from 'react';
import { AnnotationType } from '~/pages';

interface ImageProps {
  annotation: AnnotationType;
  onSetAnnotation: Dispatch<SetStateAction<AnnotationType>>;
  onSetPendingCreation: Dispatch<SetStateAction<boolean>>;
  pendingCreation: boolean;
}

export const Image = ({
  pendingCreation,
  onSetPendingCreation,
  annotation,
  onSetAnnotation,
}: ImageProps) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const handleDimensions = (e: SyntheticEvent<HTMLImageElement>) =>
    setDimensions({
      height: e.currentTarget.naturalHeight,
      width: e.currentTarget.naturalWidth,
    });

  const addAnnotationHandler = (e: MouseEvent) => {
    onSetPendingCreation(!pendingCreation);

    onSetAnnotation({
      ...annotation,
      x: e.nativeEvent.offsetX / dimensions.width,
      y: e.nativeEvent.offsetY / dimensions.height,
    });
  };

  return (
    <img
      className={clsx(
        'object-contain min-h-[535px]',
        pendingCreation ? 'cursor-auto' : 'cursor-cell',
      )}
      onClick={addAnnotationHandler}
      onLoad={handleDimensions}
      loading="lazy"
      src="https://images.unsplash.com/photo-1566918230681-eef79dfc668b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
      // src="https://images.unsplash.com/photo-1566244373908-15be37645de4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      alt="A classical palace under a sunny weather"
    />
  );
};
