import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title: string;
}

function SEO({description, lang, title}: Props) {
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

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = site.siteMetadata.image;
  const metaSiteUrl = site.siteMetadata.siteUrl;
  const metaTwitterUsername = site.siteMetadata.twitterUsername;
  // const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          name: 'image',
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${metaSiteUrl}${metaImage}`,
        },
        {
          property: `og:url`,
          content: metaSiteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:creator`,
          content: metaTwitterUsername,
        },
        {
          name: `twitter:image`,
          content: `${metaSiteUrl}${metaImage}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
};

export default SEO;
