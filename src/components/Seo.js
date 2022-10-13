import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      {children}
    </>
  )
}

export default SEO
