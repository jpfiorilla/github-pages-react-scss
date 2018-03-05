import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import { SEO } from '.';
import { getTitleFromPathname } from '../utils';

export default class DefaultComponent extends React.Component {
  render() {
    const {
      location,
      title = getTitleFromPathname(location.pathname),
    } = this.props;
    console.log(this.props, title, location);
    return (
      <Switch>
        <div className="defaultComponent">
          <SEO title={title} />
          hi
        </div>
        {/* <Route
          exact
          path="/example/two-deep"
          render={({ location }) => (
            <div>
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
              <Link to="/example/two-deep?field1=foo&field2=bar#boom!">
                Example two deep with query and hash
              </Link>
            </div>
          )}
        /> */}
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
