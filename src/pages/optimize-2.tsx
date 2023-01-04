import { useCallback, useEffect, useMemo, useState } from 'react';
import { CenteredLayout } from '~/components';

// TODO how can we optimize, prevent re-rendering ExpensiveComponent
// by changing component structure ?

const ExpensiveComponent = () => {
  const now = useMemo(() => performance.now(), []);
  // const now = performance.now();             old
  while (performance.now() - now < 100) {}
  return <div>Ohh.. so expensive</div>;
};

export const Optimize2 = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    console.log('from callback');
    setScrollTop(window.scrollY);
  }, []);

  useEffect(() => {
    // const handleScroll = () => {
    //   console.log('from scroll');
    //   setScrollTop(window.scrollY);
    // }; old code

    console.log('from use effect')

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="h-[1000vh] bg-gradient-to-tr from-gray-100 to-gray-200 bg-repeat bg-[length:100%_8px]">
      <CenteredLayout className="gap-4 fixed top-0 left-1/2 -translate-x-1/2">
        <div className="text-3xl">See the code</div>
        <div>{scrollTop} px</div>
        <ExpensiveComponent />
      </CenteredLayout>
    </div>
  );
};
