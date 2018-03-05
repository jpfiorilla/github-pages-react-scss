import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { sampleAction } from '../redux/actions/actions';
import { pages } from '../data';
import { DefaultComponent, Home, PageNotFound, Header, Footer, SEO } from '.';
import '../main.scss';

export class App extends React.Component {
  render() {
    return (
      <div id="App">
        <SEO />
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          {pages.map((page) => {
            const Component = page.component || DefaultComponent;
            return (
              <Route
                exact
                key={page.path}
                path={page.path}
                render={props => <Component {...props} {...page} />}
              />
            );
          })}
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default connect(state => state.reducer, { sampleAction })(App);
