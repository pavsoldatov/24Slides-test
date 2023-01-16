import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';
import { AnnotationType } from '~/pages';

const NewAnnotationStateCtx = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  false,
  () => null,
]);

const initialNewAnnotation = {
  text: '',
  x: 0,
  y: 0,
  xInPercent: '',
  yInPercent: '',
};

const NewAnnotationDataCtx = createContext<
  [AnnotationType, Dispatch<SetStateAction<AnnotationType>>]
>([initialNewAnnotation, () => null]);

export const NewAnnotationStore = ({ children }: { children: ReactNode }) => {
  const [isNewAnnotation, setIsNewAnnotation] = useState(false);
  const [newAnnotation, setNewAnnotation] = useState<AnnotationType>(initialNewAnnotation);

  return (
    <NewAnnotationDataCtx.Provider value={[newAnnotation, setNewAnnotation]}>
      <NewAnnotationStateCtx.Provider value={[isNewAnnotation, setIsNewAnnotation]}>
        {children}
      </NewAnnotationStateCtx.Provider>
    </NewAnnotationDataCtx.Provider>
  );
};

export const useIsNewAnnotation = () => useContext(NewAnnotationStateCtx);
export const useNewAnnotationData = () => useContext(NewAnnotationDataCtx);
