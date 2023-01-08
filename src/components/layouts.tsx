import clsx from 'clsx';
import { ReactNode } from 'react';

export const FlexWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <div className={clsx('flex flex-col align-center min-h-screen', className)}>{children}</div>;

export const Main = ({ className, children }: { className?: string; children: ReactNode }) => (
  <main className={clsx('flex-1 flex flex-col', className)}>{children}</main>
);

export const CenteredLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  //* TODO is there a better way to fill available remaining height?
  // scroll height seems bugged :\
  <div
    className={clsx(
      'flex-1 flex flex-col items-center justify-center text-slate-700',
      className,
    )}
  >
    {children}
  </div>
);
