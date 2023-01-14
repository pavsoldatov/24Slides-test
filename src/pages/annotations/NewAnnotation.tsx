import {
  useDeferredValue,
  useState,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  AnnotationType,
  CircleButton,
  Panel,
  SendIcon,
  Wrapper,
  useCreateAnnotation,
} from '~/pages';

interface NewAnnotationProps {
  onSetPendingCreation: Dispatch<SetStateAction<boolean>>;
  onSetAnnotation: Dispatch<SetStateAction<AnnotationType>>;
  pendingCreation: boolean;
  annotation: Omit<AnnotationType, 'id'>;
  number: number;
}

export const NewAnnotation = ({
  annotation,
  pendingCreation,
  onSetPendingCreation,
  number,
}: NewAnnotationProps) => {
  const coords = { x: annotation.x * 100 + '%', y: annotation.y * 100 + '%' };
  const mutation = useCreateAnnotation();

  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ text: deferredText, x: annotation.x, y: annotation.y });

    //TODO: refetch and update - useMutation & invalidateQueries
    //TODO: get number

    onSetPendingCreation(false);
    setText('');
  };

  return (
    <>
      {pendingCreation && (
        <Wrapper isElevated={true} x={coords.x} y={coords.y}>
          <CircleButton number={number} onOpen={onSetPendingCreation} />
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
      )}
    </>
  );
};
