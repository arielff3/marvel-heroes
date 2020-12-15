import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '@components/Loading';
import { prerenderedLazy } from '@utils/prerenderedLazy';
import Hooks from '@hooks/index';

const Home = prerenderedLazy(() => import('@pages/Home'));
const Details = prerenderedLazy(() => import('@pages/Details'));
const Error = prerenderedLazy(() => import('@pages/Error'));
const GenericNotFound = prerenderedLazy(() => import('@pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hooks>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detalhes/:id" component={Details} />
          <Route path="/error" component={Error} />
          <Route path="/404" component={GenericNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Hooks>
    </Suspense>
  );
};

export default Routes;
