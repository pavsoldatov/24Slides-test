import clsx from 'clsx';
import { useMemo } from 'react';
import { CircleButton, Panel, Wrapper, getCoordsInPercent, NewAnnotationForm } from '~/pages';
import { useIsNewAnnotation, useNewAnnotationData } from './context';
import css from './Annotation.module.scss';

export const NewAnnotation = ({ number }: { number?: number }) => {
  const [newAnnotation] = useNewAnnotationData();
  const [isNewAnnotation, setIsNewAnnotation] = useIsNewAnnotation();

  const { x, y } = useMemo(
    () => getCoordsInPercent(newAnnotation.x, newAnnotation.y),
    [newAnnotation.x, newAnnotation.y],
  );

  const handleClick = () => setIsNewAnnotation(false);

  return (
    <Wrapper
      className={clsx(isNewAnnotation ? css.fadeIn : css.fadeOut)}
      isElevated={true}
      x={x}
      y={y}
    >
      <CircleButton number={number} onClick={handleClick} />
      <Panel isOpen={isNewAnnotation ?? true}>
        <NewAnnotationForm />
      </Panel>
    </Wrapper>
  );
};
