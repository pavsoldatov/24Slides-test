import clsx from 'clsx';
import { useState, memo } from 'react';
import { AnnotationType, AnnotationContent, CircleButton, Wrapper, Panel } from '~/pages';
import css from './Annotation.module.scss';

export interface AnnotationProps {
  annotation: AnnotationType;
  number: number;
}

export const Annotation = memo(({ annotation, number }: AnnotationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = () => setIsOpen(!isOpen);

  return (
    <Wrapper
      className={clsx(annotation ? css.fadeIn : css.fadeOut)}
      isElevated={isOpen}
      x={annotation.xInPercent}
      y={annotation.yInPercent}
    >
      <CircleButton onClick={handleVisibility} number={number} />
      <Panel isOpen={isOpen}>
        <AnnotationContent text={annotation.text} id={annotation.id} />
      </Panel>
    </Wrapper>
  );
});
