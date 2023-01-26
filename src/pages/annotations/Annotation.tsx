import clsx from 'clsx';
import { useMemo, Dispatch, SetStateAction } from 'react';
import {
  AnnotationType,
  AnnotationContent,
  CircleButton,
  Wrapper,
  Panel,
  getCoordsInPercent,
  useSyncAnnotationToggle,
} from '~/pages';
import css from './Annotation.module.scss';

export interface AnnotationProps {
  annotation: AnnotationType;
  number: number;
  activeId: number;
  setActiveId: Dispatch<SetStateAction<number>>;
}

export const Annotation = ({ annotation, number, activeId, setActiveId }: AnnotationProps) => {
  const { id: currentId, comment, author, pos } = annotation;

  const { x, y } = useMemo(() => getCoordsInPercent(pos.x, pos.y), [pos.x, pos.y]);

  const [handleVisibility, isOpen] = useSyncAnnotationToggle(currentId!, activeId, setActiveId);

  return (
    <Wrapper
      className={clsx(annotation ? css.fadeIn : css.fadeOut, isOpen ? 'z-[2]' : 'z-[0]')}
      x={x}
      y={y}
    >
      <CircleButton onClick={handleVisibility} number={number} />
      <Panel isOpen={isOpen}>
        <AnnotationContent id={currentId} comment={comment} author={author} />
      </Panel>
    </Wrapper>
  );
};
