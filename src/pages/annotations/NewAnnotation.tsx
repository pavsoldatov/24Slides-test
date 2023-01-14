import clsx from 'clsx';
import {
  useDeferredValue,
  useState,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  CircleButton,
  Panel,
  SendIcon,
  Wrapper,
  useCreateAnnotation,
  NewAnnotationType,
} from '~/pages';
import css from './Annotation.module.scss';

interface NewAnnotationProps {
  onSetNewAnnotation: Dispatch<SetStateAction<NewAnnotationType>>;
  newAnnotation: NewAnnotationType;
  number: number;
}

export const NewAnnotation = ({
  newAnnotation,
  onSetNewAnnotation,
  number,
}: NewAnnotationProps) => {
  const coords = { x: newAnnotation.x * 100 + '%', y: newAnnotation.y * 100 + '%' };

  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const toggleOpenHandler = () => onSetNewAnnotation({ ...newAnnotation, isActive: false });

  const mutation = useCreateAnnotation();

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ text: deferredText, x: newAnnotation.x, y: newAnnotation.y });

    //TODO: refetch and update - useMutation & invalidateQueries
    //TODO: get number

    onSetNewAnnotation({ ...newAnnotation, isActive: false });
    setText('');
  };

  return (
    <Wrapper
      className={clsx(newAnnotation.isActive ? css.fadeIn : css.fadeOut)}
      isElevated={true}
      x={coords.x}
      y={coords.y}
    >
      <CircleButton number={number} onOpen={toggleOpenHandler} />
      <Panel isOpen={true}>
        <form onSubmit={handleCreate} className="flex justify-between gap-[24px]">
          <input
            id="comment"
            name="annotationText"
            value={deferredText}
            onChange={handleTextChange}
            placeholder="Leave a comment"
            className="w-full p-2 text-sm border-b-[2px] border-b-[#C9CBD0] outline-none"
          />
          <button
            type="submit"
            className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200"
          >
            <SendIcon />
          </button>
        </form>
      </Panel>
    </Wrapper>
  );
};
