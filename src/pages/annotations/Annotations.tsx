import { useState } from 'react';
import { CenteredLayout } from '~/components';
import { MouseIcon, CrossIcon, Annotation, Image, NewAnnotation, useAnnotations } from '~/pages';

//? Annotation states:
//? 1. Creation - when an unoccupied area of the image is clicked - fades in (circle + input)
//? 2. Sending a post request - when input is submitted during the creation phase
//? 3. Response with success status ?
//?            annotation is created - input fades out, circle remains (active, clickable)
//?          : creation phase stops (on error or otherwise), it fades out with the circle (inactive)
//? 3.1 Created annotation stays on the image according to its coords (active)
//? 3.2 Annotation may be deleted with a delete request

//? Annotation PAGE states:
//? 1. ALL Annotations are fetched and positioned on the image as circles as per their coords
//? 1.1. A circle has two stages - active and inactive
//? 2. Each circle can be opened with only one state -- as a created annotation
//? (ie, name, message, delete button). In this state, it can only be deleted.

//* Creation phase open/closed logic exists ONLY ON CLIENT - (circle & input, both fade-in/out)
//* Created annotation's open/closed state exists ONLY ON CLIENT -
//* (circle & message, only message fades-in/out)

//* TLDR: an annotation is a circle button that opens with a message from where can be deleted.
//* (continued): A creation stage has little to do with the annotation. We neither GET, nor
//* (continued): POST them (until submitted). Creation stage logic is reserved to client.
//* (continued): The creation form fades in/out when the image is clicked.
//* (continued): An annotation fades-in/out differently - it makes only an input appear when clicked.
//* (continued): The circle always remains. It has no properties but text, x, y. No 'open' state.

export type AnnotationType = {
  text: string;
  x: number;
  y: number;
  id?: number;
};

export const Annotations = () => {
  const { data: annotations } = useAnnotations();

  const [pendingCreation, setPendingCreation] = useState(false);

  const [annotation, setAnnotation] = useState<AnnotationType>({
    text: '',
    x: 0,
    y: 0,
  });
  console.log(annotations?.length);

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
            <Image
              annotation={annotation}
              onSetAnnotation={setAnnotation}
              pendingCreation={pendingCreation}
              onSetPendingCreation={setPendingCreation}
            />
            {annotations && (
              <NewAnnotation
                number={annotations.length + 1}
                annotation={annotation}
                onSetAnnotation={setAnnotation}
                pendingCreation={pendingCreation}
                onSetPendingCreation={setPendingCreation}
              />
            )}
            {annotations &&
              annotations.map((annotation, idx) => (
                <Annotation key={annotation.id} annotation={annotation} index={idx + 1} />
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
