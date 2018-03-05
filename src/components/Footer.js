import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { facebookHandle, twitterHandle } from '../data';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        {facebookHandle ? (
          <SocialIcon
            url={
              facebookHandle.includes('.com')
                ? facebookHandle
                : `https://www.facebook.com/${facebookHandle.replace(
                    /\W/g,
                    '',
                  )}`
            }
          />
        ) : null}
        {twitterHandle ? (
          <SocialIcon
            url={
              twitterHandle.includes('.com')
                ? twitterHandle
                : `https://twitter.com/${twitterHandle.replace(/\W/g, '')}`
            }
          />
        ) : null}
      </div>
    );
  }
}
