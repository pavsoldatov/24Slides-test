import { Outlet, ReactLocation, Route, Router } from '@tanstack/react-location';
import { Header } from '~/app';
import { CenteredLayout, FlexWrapper, Main } from '~/components';
import { Annotations, Optimize1, Optimize2, Ranges, Refactor1, Refactor2 } from '~/pages';

const Welcome = () => (
  <CenteredLayout className="gap-4">
    <div className="text-3xl">Welcome to 24Slides test task!</div>
    <div>Explore pages and their code to understand what we can improve here :)</div>
  </CenteredLayout>
);

const reactLocation = new ReactLocation();

const routes: Route[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'refactor-1',
    element: <Refactor1 />,
  },
  {
    path: 'refactor-2',
    element: <Refactor2 />,
  },
  {
    path: 'optimize-1',
    element: <Optimize1 />,
  },
  {
    path: 'optimize-2',
    element: <Optimize2 />,
  },
  {
    path: 'ranges',
    element: <Ranges />,
  },
  {
    path: 'annotations',
    element: <Annotations />,
  },
];

export const App = () => (
  <Router location={reactLocation} routes={routes}>
    <FlexWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </FlexWrapper>
  </Router>
);
