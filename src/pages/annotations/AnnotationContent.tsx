import clsx from 'clsx';
import { FormEvent } from 'react';
import { DeleteIcon, useDeleteAnnotation, Loader } from '~/pages';

interface AnnotationContentProps {
  text: string;
  id?: number;
}

export const AnnotationContent = ({ text, id }: AnnotationContentProps) => {
  const mutation = useDeleteAnnotation();

  const handleDelete = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    id ? mutation.mutate(id) : console.error(`cannot find id: ${id}`);
  };

  return (
    <form onSubmit={handleDelete} className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <div className="flex justify-center self-center bg-[#DB7474] rounded-full h-8 w-8">
          <p className="text-sm text-[#FDD5D5] font-semibold self-center leading-4">HP</p>
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#4A4A4A]">Harry Potter</h4>
          <p className="text-[14px] leading-[18px] text-[#4A4A4A]">{text}</p>
        </div>
      </div>
      <button
        disabled={mutation.isLoading}
        type="submit"
        className={clsx(
          'absolute top-0 right-0 p-2 m-1 rounded-full',
          !mutation.isLoading && 'hover:bg-neutral-100 active:bg-neutral-200',
        )}
      >
        {mutation.isLoading ? <Loader /> : <DeleteIcon />}
      </button>
    </form>
  );
};
