import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class SEO extends Component {
  getSchemaOrgJSONLD() {
    const { url, title, description } = this.props
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      title,
      description,
    }
  }

  render() {
    const {
      url,
      title,
      description,
      // Open Graph tags
      ogTitle,
      ogDescription,
      ogImage,
      ogType,
    } = this.props

    return (
      <Helmet>
        {/* General tags */}
        <meta charSet="utf-8" />
        {title && <title>{title}</title>}
        {url && <link rel="canonical" href={url} />}
        {description && <meta name="description" content={description} />}

        {/* Schema.org tags */}
        {title &&
          url &&
          description && (
            <script type="application/ld+json">{`
            ${JSON.stringify(this.getSchemaOrgJSONLD())}
          `}</script>
          )}

        {/* OpenGraph tags */}
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        {/* Any "og*" tags from props should override default site ones */}
        {ogTitle || (title && <meta property="og:title" content={ogTitle ? ogTitle : title} />)}
        {ogDescription ||
          (description && <meta property="og:description" content={ogDescription ? ogDescription : description} />)}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogType && <meta property="og:type" content={ogType} />}
      </Helmet>
    )
  }
}

SEO.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // Open Graph props should override if provided
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
}

SEO.defaultProps = {
  ogType: 'website'
}

export default SEO