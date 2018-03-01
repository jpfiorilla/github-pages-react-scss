import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>
        This is an example single page app built with React and
        React&nbsp;Router using BrowserRouter. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p>
        Please see the repo readme for instructions on how to use this
        boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div>
        <Interactive as={Link} to="/example">
          Example page
        </Interactive>
      </div>
      <div>
        <Interactive
          as={Link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >
          Example two deep with query and hash
        </Interactive>
      </div>
    </div>
  );
}
