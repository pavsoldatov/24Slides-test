import clsx from 'clsx';
import { useMemo } from 'react';
import { CircleButton, Panel, Wrapper, getCoordsInPercent, NewAnnotationForm } from '~/pages';
import { useIsNewAnnotation, useNewAnnotationData } from './context';
import css from './Annotation.module.scss';

export const NewAnnotation = ({ number }: { number?: number }) => {
  const [isNewAnnotation, setIsNewAnnotation] = useIsNewAnnotation();

  const [{ pos }] = useNewAnnotationData();
  const { x, y } = useMemo(() => getCoordsInPercent(pos.x, pos.y), [pos.x, pos.y]);

  const handleClick = () => setIsNewAnnotation(false);

  return (
    <Wrapper
      className={clsx(isNewAnnotation ? `${css.fadeIn} z-[4]` : `${css.fadeOut} z-[0]`)}
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
