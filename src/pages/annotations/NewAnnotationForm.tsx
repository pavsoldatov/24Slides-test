import { useState, useDeferredValue, FormEvent, ChangeEvent } from 'react';
import { useCreateAnnotation, SendIcon, useFocus } from '~/pages';
import { useIsNewAnnotation, useNewAnnotationData } from './context';

export const NewAnnotationForm = () => {
  const [newAnnotation] = useNewAnnotationData();
  const [, setIsNewAnnotation] = useIsNewAnnotation();

  const inputRef = useFocus<HTMLInputElement>();

  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const mutation = useCreateAnnotation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({
      text: deferredText,
      x: newAnnotation.x,
      y: newAnnotation.y,
      xInPercent: newAnnotation.x * 100 + '%',
      yInPercent: newAnnotation.y * 100 + '%',
    });

    setIsNewAnnotation(false);
    setText('');
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-[24px]">
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
