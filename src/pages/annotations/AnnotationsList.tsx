import { useState, memo, useMemo } from 'react';
import { CenteredLayout } from '~/components';
import { MouseIcon, CrossIcon, Annotation, Image, NewAnnotation, useAnnotations } from '~/pages';

export type AnnotationType = {
  text: string;
  x: number;
  y: number;
  id?: number;
};

export type NewAnnotationType = {
  text: string;
  x: number;
  y: number;
  isActive?: boolean;
};

export const AnnotationsList = () => {
  console.log('from list');
  const { data: annotations, isLoading } = useAnnotations();

  const [newAnnotation, setNewAnnotation] = useState<NewAnnotationType>({
    isActive: false,
    text: '',
    x: 0,
    y: 0,
  });

  //TODO Try Zustand as a potential solution to AnnotationList costly rerenders
  //TODO Consider sending calculated percentage coords to server

  return (
    <div className="flex-1 bg-[#1E1E1E] flex">
      <CenteredLayout className="justify-center max-w-screen-lg 2xl:max-w-screen-xl mx-auto text-white gap-8 my-8">
        <section className="flex justify-between w-full px-4 lg:px-0">
          <h2 className="text-2xl font-bold">File name</h2>
          <button className="text-neutral-900 bg-neutral-400 px-6 py-2 rounded text-base font-semibold hover:bg-neutral-300 active:scale-95">
            Upload Image
          </button>
        </section>
        <section className="bg-[#2A2A2A] flex justify-center align-center w-full">
          <div className="relative flex">
            <Image newAnnotation={newAnnotation} onSetNewAnnotation={setNewAnnotation} />
            <NewAnnotation
              newAnnotation={newAnnotation}
              onSetNewAnnotation={setNewAnnotation}
              number={annotations && annotations.length + 1}
            />
            {annotations?.map((annotation, idx) => (
              <Annotation
                key={annotation.id}
                annotation={annotation}
                number={idx + 1}
                isLoading={isLoading}
              />
            ))}
          </div>
        </section>
        <section className="text-xs md:text-base self-start text-[#909090] px-4 lg:px-0">
          <p>
            To leave a comment, mouseover
            <CrossIcon />
            on an image and click the left mouse button <MouseIcon />
          </p>
        </section>
      </CenteredLayout>
    </div>
  );
};
