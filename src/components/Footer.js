import * as React from 'react';
import { facebookHandle, twitterHandle } from '../data';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        {facebookHandle ? (
          <a
            target="__blank"
            href={`https://www.facebook.com/${facebookHandle.replace(
              /\W/g,
              '',
            )}`}
          >
            {facebookHandle}
          </a>
        ) : null}
        {twitterHandle ? (
          <a
            target="__blank"
            href={`https://twitter.com/${twitterHandle.replace(/\W/g, '')}`}
          >
            {twitterHandle}
          </a>
        ) : null}
      </div>
    );
  }
}
