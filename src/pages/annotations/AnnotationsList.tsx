import { Annotation, AnnotationType } from '~/pages';
interface AnnotationsListProps {
  annotations?: AnnotationType[];
}

export const AnnotationsList = ({ annotations }: AnnotationsListProps) => {
  return (
    <ul>
      {annotations?.map((annotation, idx) => (
        <Annotation key={annotation.id} annotation={annotation} number={idx + 1} />
      ))}
    </ul>
  );
};
