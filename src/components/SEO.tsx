import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "English Words - Interactive Vocabulary Learning for Polish Speakers",
  description = "Master 3000+ essential English words with our interactive vocabulary trainer. Perfect for Polish speakers learning English. Features multiple choice, typing exercises, smart hints, and progress tracking.",
  keywords = "English vocabulary, Polish English learning, vocabulary trainer, English words, language learning, Oxford words, interactive exercises, English for Poles, vocabulary builder",
  canonicalUrl = "https://bitlogicforge.github.io/englishWords/",
  ogImage = "https://bitlogicforge.github.io/englishWords/og-image.png",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);

    // Update canonical URL
    updateCanonicalUrl(canonicalUrl);
  }, [title, description, keywords, canonicalUrl, ogImage]);

  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      element.setAttribute(attribute, value);
      element.setAttribute("content", content);
      document.head.appendChild(element);
    }
  };

  const updateCanonicalUrl = (url: string) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (element) {
      element.setAttribute("href", url);
    } else {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
      element.setAttribute("href", url);
      document.head.appendChild(element);
    }
  };

  return null;
};

export default SEO;
