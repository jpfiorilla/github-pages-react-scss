import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { pages } from '../data';
import {
  DefaultComponent,
  Home,
  ExampleComponent,
  PageNotFound,
  Header,
  Footer,
  SEO,
} from '.';
import '../main.scss';

export default function App() {
  return (
    <div id="App">
      <SEO />
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
