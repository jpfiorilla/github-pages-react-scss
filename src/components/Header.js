import * as React from 'react';
import { Breadcrumbs } from '.';

export default class Header extends React.Component {
  render() {
    return (
      <div id="Header">
        <div className="logo" />
        <nav>
          <Breadcrumbs />
        </nav>
      </div>
    );
  }
}
