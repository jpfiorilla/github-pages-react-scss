import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from '../pages';
import {
  DefaultComponent,
  Home,
  ExampleComponent,
  PageNotFound,
  Header,
  Footer,
} from '.';
import '../main.scss';

export default function App() {
  return (
    <div id="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        {pages.map(page => (
          <Route
            exact
            {...page}
            key={page.path}
            component={page.component || DefaultComponent}
          />
        ))}
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
}
