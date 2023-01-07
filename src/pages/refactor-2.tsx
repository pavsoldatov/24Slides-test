import { CenteredLayout } from '~/components';

//* TODO refactor

interface QuestionOrAnswer {
  question?: string;
  answer?: string;
  id: number;
}

interface QnaRenderProps extends Pick<QuestionOrAnswer, 'question' | 'answer'> {}

const QnA: QuestionOrAnswer[] = [
  { id: 1, question: 'Do you run like a fish?' },
  { id: 2, answer: 'Absolutely man' },
  { id: 3, question: 'Have you tried to swim like a dinosaur?' },
  { id: 4, answer: 'Nah, not my cup of tea' },
  { id: 5, question: 'How are we counting from 5 to 10?' },
  { id: 6, answer: 'Do I look like a counter?' },
];

const QnaRender = ({ question, answer }: QnaRenderProps) => {
  return question ? (
    <h3 className="font-bold text-lg">{question}</h3>
  ) : (
    <p className="mb-2">{answer}</p>
  );
};

export const Refactor2 = () => {
  return (
    <CenteredLayout className="gap-2">
      <div className="text-3xl mb-2">See the code</div>
      {QnA.map((item) => (
        <QnaRender key={item.id} question={item.question} answer={item.answer} />
      ))}
    </CenteredLayout>
  );
};
