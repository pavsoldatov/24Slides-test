import clsx from 'clsx';
import { useState, memo, useMemo, Dispatch, SetStateAction } from 'react';
import {
  AnnotationType,
  AnnotationContent,
  CircleButton,
  Wrapper,
  Panel,
  getCoordsInPercent,
} from '~/pages';
import css from './Annotation.module.scss';

export interface AnnotationProps {
  annotation: AnnotationType;
  number: number;
  isActive: boolean;
  setActiveId: Dispatch<SetStateAction<number>>;
}

export const Annotation = ({ annotation, number, isActive, setActiveId }: AnnotationProps) => {
  const { id, comment, author, pos } = annotation;
  const { x, y } = useMemo(() => getCoordsInPercent(pos.x, pos.y), [pos.x, pos.y]);

  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = () => {
    setActiveId(id!);
    console.log(id);
    isActive ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Wrapper
      className={clsx(annotation ? css.fadeIn : css.fadeOut)}
      isElevated={isOpen}
      x={x}
      y={y}
    >
      <CircleButton onClick={handleVisibility} number={number} />
      <Panel isOpen={isOpen}>
        <AnnotationContent id={id} comment={comment} author={author} />
      </Panel>
    </Wrapper>
  );
};
