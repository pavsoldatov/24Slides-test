import {
  useDeferredValue,
  useState,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { AnnotationType, CircleButton, Panel, SendIcon, Wrapper } from '~/pages';

interface NewAnnotationProps {
  onSetPendingCreation: Dispatch<SetStateAction<boolean>>;
  onSetAnnotation: Dispatch<SetStateAction<AnnotationType>>;
  pendingCreation: boolean;
  annotation: AnnotationType;
  number: number;
  onSetIsActive: Dispatch<SetStateAction<boolean>>;
  onCreationSuccess: any;
}

export const NewAnnotation = ({
  annotation,
  onSetPendingCreation,
  number,
  onSetIsActive,
  onCreationSuccess,
}: NewAnnotationProps) => {
  const coords = { x: annotation.x * 100 + '%', y: annotation.y * 100 + '%' };

  const [isOpen, setIsOpen] = useState(true);

  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:3001/v1' + '/annotations', {
      method: 'POST',
      body: JSON.stringify({
        text: deferredText,
        x: annotation.x,
        y: annotation.y,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        onSetPendingCreation(false);
        onSetIsActive(false);
        onCreationSuccess()
        //TODO: refetch and update
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setText('');
  };

  return (
    <Wrapper isOpen={isOpen} x={coords.x} y={coords.y}>
      <CircleButton onOpen={setIsOpen} number={number} />
      <Panel isOpen={isOpen}>
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
