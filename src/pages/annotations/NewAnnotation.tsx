import clsx from 'clsx';
import { Dispatch, SetStateAction, memo, useMemo } from 'react';
import {
  CircleButton,
  Panel,
  Wrapper,
  NewAnnotationType,
  getCoordsInPercent,
  NewAnnotationForm,
} from '~/pages';
import css from './Annotation.module.scss';

export interface NewAnnotationProps {
  onSetNewAnnotation: Dispatch<SetStateAction<NewAnnotationType>>;
  newAnnotation: NewAnnotationType;
  number?: number;
}

export const NewAnnotation = memo(
  ({ newAnnotation, onSetNewAnnotation, number }: NewAnnotationProps) => {
    const coords = useMemo(
      () => getCoordsInPercent(newAnnotation.x, newAnnotation.y),
      [newAnnotation.x, newAnnotation.y],
    );

    const handleVisibility = () => onSetNewAnnotation({ ...newAnnotation, isActive: false });

    return (
      <Wrapper
        className={clsx(newAnnotation.isActive ? css.fadeIn : css.fadeOut)}
        isElevated={true}
        x={coords.x}
        y={coords.y}
      >
        <CircleButton number={number} onClick={handleVisibility} />
        <Panel isOpen={newAnnotation.isActive ?? true}>
          <NewAnnotationForm
            onSetNewAnnotation={onSetNewAnnotation}
            newAnnotation={newAnnotation}
          />
        </Panel>
      </Wrapper>
    );
  },
);
