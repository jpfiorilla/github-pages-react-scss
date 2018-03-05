import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import { SEO } from '.';

const DefaultPageText = () => (
  <p>
    This is the default page. Refresh the page or copy/paste the url to test out
    the redirect functionality (this same page should load after the redirect).
  </p>
);

export default class DefaultComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Switch>
        <DefaultPageText />
        <Route
          exact
          path="/example/two-deep"
          render={({ location }) => (
            <div>
              <DefaultPageText />
              <ExampleTwoDeepComponent location={location} />
            </div>
          )}
        />
        <Route
          exact
          path="/example"
          render={({ location }) => (
            <div className={location}>
              <SEO />
              <DefaultPageText />
              <Link to="/example/two-deep?field1=foo&field2=bar#boom!">
                Example two deep with query and hash
              </Link>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
