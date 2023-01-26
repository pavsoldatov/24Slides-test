import { useState } from 'react';
import { Annotation, AnnotationType } from '~/pages';
interface AnnotationsListProps {
  annotations?: AnnotationType[];
}

export const AnnotationsList = ({ annotations }: AnnotationsListProps) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <ul>
      {annotations?.map((annotation, idx) => (
        <Annotation
          key={annotation.id}
          annotation={annotation}
          number={idx + 1}
          isActive={activeId === annotation.id}
          setActiveId={setActiveId}
        />
      ))}
    </ul>
  );
};
