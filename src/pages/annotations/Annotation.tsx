import { Dispatch, SetStateAction, useState } from 'react';
import { AnnotationType, AnnotationContent, CircleButton, Wrapper, Panel } from '~/pages';

export interface AnnotationProps {
  annotation: AnnotationType;
}

//* Creation phase logic exists only on client

//TODO Creation form belongs to image
//TODO AnnotationContent belongs to actual annotation, as well as two states: open/closed.

export const Annotation = ({ annotation }: AnnotationProps) => {
  const coords = { x: annotation.x * 100 + '%', y: annotation.y * 100 + '%' };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen} x={coords.x} y={coords.y}>
      <CircleButton onOpen={setIsOpen} number={annotation.id} />
      <Panel isOpen={isOpen}>
        <AnnotationContent text={annotation.text} id={annotation.id} />
      </Panel>
    </Wrapper>
  );
};
