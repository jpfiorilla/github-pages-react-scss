import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from '../pages';
import {
  DefaultComponent,
  Home,
  ExampleComponent,
  PageNotFound,
  Breadcrumbs,
} from '.';
import '../main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <nav>
          <Breadcrumbs />
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/example" component={ExampleComponent} />
          {pages.map((page) => {
            console.log(page);
            return (
              <Route
                exact
                {...page}
                key={page.path}
                path={page.path}
                component={page.component || DefaultComponent}
              />
            );
          })}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
