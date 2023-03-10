import { CenteredLayout } from '~/components';
import {
  MouseIcon,
  CrossIcon,
  Image,
  NewAnnotation,
  useAnnotations,
  AnnotationsList,
} from '~/pages';
import { NewAnnotationStore } from './context';

export interface AnnotationType {
  id?: number;
  author: string;
  comment: string;
  pos: {
    x: number;
    y: number;
  };
}

export const Annotations = () => {
  const { data: annotations } = useAnnotations();
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
            <NewAnnotationStore>
              <Image />
              <NewAnnotation number={annotations && annotations.length + 1} />
            </NewAnnotationStore>
            <AnnotationsList annotations={annotations} />
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
