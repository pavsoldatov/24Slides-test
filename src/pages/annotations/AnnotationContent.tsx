import { FormEvent, Dispatch, SetStateAction } from 'react';
import { AnnotationType, DeleteIcon } from '~/pages';

interface AnnotationContentProps {
  text: string;
  id?: number;
}

export const AnnotationContent = ({ text, id }: AnnotationContentProps) => {
  const BASE_URL = 'http://localhost:3001/v1';

  const handleDelete = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(BASE_URL + `/annotations/${id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        type="submit"
        className="absolute top-0 right-0 p-2 m-1 rounded-full hover:bg-neutral-100 active:bg-neutral-200"
      >
        <DeleteIcon />
      </button>
    </form>
  );
};
