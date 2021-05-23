import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

interface Props {
  title: string;
}

function SEO({title}: Props) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            image
            twitterUsername
          }
        }
      }
    `,
  );

  const metaDescription = site.siteMetadata.description;
  const metaSiteUrl = site.siteMetadata.siteUrl;
  const metaImage = `${metaSiteUrl}${site.siteMetadata.image}`;
  const metaTwitterUsername = site.siteMetadata.twitterUsername;

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" />

      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaSiteUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metaTwitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}

SEO.defaultProps = {};

export default SEO;
