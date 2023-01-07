import clsx from 'clsx';
import { useState, ComponentPropsWithoutRef } from 'react';
import { CenteredLayout } from '~/components';

//* TODO is there a way to not write this twice? =\

const buttons = ['fast', 'quality', 'cheap'] as const;
type ButtonType = typeof buttons[number];

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonVariant: ButtonType;
  selectedButton: ButtonType | null;
  onSelectButton: (value: ButtonType) => void;
}

//* TODO is it possible to improve this component's interface (props)?
const Button = ({ buttonVariant, selectedButton, onSelectButton, ...props }: ButtonProps) => {
  const isSelected = buttonVariant === selectedButton;
  return (
    <button
      key={buttonVariant}
      onClick={() => onSelectButton(buttonVariant)}
      className={clsx(
        'h-10 px-5 flex items-center justify-center rounded transition-colors',
        isSelected ? 'bg-green-400' : 'bg-gray-300',
      )}
      {...props}
    >
      {buttonVariant}
    </button>
  );
};

export const Refactor1 = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((button) => (
          <Button
            key={button}
            buttonVariant={button}
            selectedButton={selectedButton}
            onSelectButton={setSelectedButton}
          />
        ))}
      </div>
    </CenteredLayout>
  );
};
