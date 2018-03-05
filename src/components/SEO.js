import React from 'react';
import Helmet from 'react-helmet';
import { siteName, twitterHandle, socialMediaImages } from '../data';

const getMetaTags = ({
  title,
  description,
  url,
  //   contentType,
  published,
  updated,
  category,
  tags,
  twitter,
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    // { itemprop: 'image', content: seoImageURL(_.sample(socialMediaImages.google)) },
    { name: 'description', content: description },
    // { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: twitter || twitterHandle },
    {
      name: 'twitter:title',
      content: title ? `${title} | ${siteName}` : siteName,
    },
    // { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter || twitterHandle },
    // { name: 'twitter:image:src', content: seoImageURL(_.sample(socialMediaImages.twitter)) },
    { name: 'og:title', content: `${title} | Simplifi` },
    // { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    // { name: 'og:image', content: seoImageURL(_.sample(socialMediaImages.facebook)) },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'Simplifi' },
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }
  if (updated) {
    metaTags.push({ name: 'article:modified_time', content: updated });
  }
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });

  return metaTags;
};

const SEO = ({
  schema,
  title,
  description = '',
  //   path,
  //   contentType,
  published,
  updated,
  category,
  tags,
  twitter,
}) => (
  <Helmet
    title={title ? `${title} | ${siteName}` : siteName || ''}
    htmlAttributes={{
      lang: 'en',
      itemscope: undefined,
      itemtype: `http://schema.org/${'VideoGame' || schema}`,
    }}
    link={[{ rel: 'canonical', href: location.href }]}
    meta={getMetaTags({
      title,
      description,
      //   contentType,
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
