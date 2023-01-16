import { useState, useDeferredValue, FormEvent, ChangeEvent } from 'react';
import { useCreateAnnotation, SendIcon, NewAnnotationProps } from '~/pages';

interface NewAnnotationFormProps extends Exclude<NewAnnotationProps, 'number'> {}

export const NewAnnotationForm = ({ onSetNewAnnotation, newAnnotation }: NewAnnotationFormProps) => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const mutation = useCreateAnnotation();

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ text: deferredText, x: newAnnotation.x, y: newAnnotation.y });

    onSetNewAnnotation({ ...newAnnotation, isActive: false });
    setText('');
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <form onSubmit={handleCreate} className="flex justify-between gap-[24px]">
      <input
        ref={inputRef}
        id="comment"
        name="annotationText"
        value={deferredText}
        onChange={handleTextChange}
        placeholder="Leave a comment"
        className="w-full p-2 text-sm border-b-[2px] border-b-[#C9CBD0] outline-none"
      />
      <button type="submit" className="p-3 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
        <SendIcon />
      </button>
    </form>
  );
};
