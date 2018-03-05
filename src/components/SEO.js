import React from 'react';
import Helmet from 'react-helmet';
import sample from 'lodash.sample';
import { siteName, twitterHandle, schema, socialMediaImages } from '../data';

const allImages = [
  ...socialMediaImages.facebook,
  ...socialMediaImages.twitter,
  ...socialMediaImages.google,
];
const facebookImages = socialMediaImages.facebook.length
  ? socialMediaImages.facebook
  : allImages;
const twitterImages = socialMediaImages.twitter.length
  ? socialMediaImages.twitter
  : allImages;
const googleImages = socialMediaImages.google.length
  ? socialMediaImages.google
  : allImages;

const twitterName =
  twitterHandle[0] === '@' ? twitterHandle : `@${twitterHandle}`;

const getMetaTags = ({
  title,
  description = '',
  url,
  published,
  updated,
  category,
  tags,
  twitter = twitterName,
}) => {
  const metaTitle = title ? `${title} | ${siteName}` : siteName;
  const metaTags = [
    { itemprop: 'name', content: metaTitle },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: sample(googleImages) },
    { name: 'description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: twitter },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter },
    { name: 'twitter:image:src', content: sample(twitterImages) },
    { name: 'og:title', content: metaTitle },
    { name: 'og:url', content: url },
    { name: 'og:image', content: sample(facebookImages) },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: siteName },
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }
  if (updated) {
    metaTags.push({ name: 'article:modified_time', content: updated });
  }
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags && tags.length) {
    metaTags.push({ name: 'article:tag', content: tags });
  }

  return metaTags;
};

const SEO = ({
  title = '',
  description = '',
  path = window.location.href || '',
  published = '',
  updated = '',
  category = '',
  tags = [],
  twitter = '',
}) => (
  <Helmet
    title={title ? `${title} | ${siteName}` : siteName || ''}
    htmlAttributes={{
      lang: 'en',
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    }}
    link={[{ rel: 'canonical', href: path }]}
    meta={getMetaTags({
      title,
      description,
      url: location.href,
      published,
      updated,
      category,
      tags,
      twitter,
    })}
  />
);

export default SEO;
