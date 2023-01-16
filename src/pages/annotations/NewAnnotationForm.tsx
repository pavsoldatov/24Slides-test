import { FormEvent } from 'react';
import { useCreateAnnotation, SendIcon, useFocus } from '~/pages';
import { useIsNewAnnotation, useNewAnnotationData } from './context';

export const NewAnnotationForm = () => {
  const [newAnnotation] = useNewAnnotationData();
  const [, setIsNewAnnotation] = useIsNewAnnotation();

  const inputRef = useFocus<HTMLInputElement>();

  const mutation = useCreateAnnotation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formJson = Object.fromEntries(new FormData(e.currentTarget).entries());

    mutation.mutate({
      comment: formJson.comment.toString(),
      author: 'Harry Potter',
      pos: {
        x: newAnnotation.pos.x,
        y: newAnnotation.pos.y,
      },
    });

    setIsNewAnnotation(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-[24px]">
      <input
        ref={inputRef}
        id="comment"
        name="comment"
        placeholder="Leave a comment"
        className="w-full p-2 text-sm border-b-[2px] border-b-[#C9CBD0] outline-none"
      />
      <button type="submit" className="p-3 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
        <SendIcon />
      </button>
    </form>
  );
};
