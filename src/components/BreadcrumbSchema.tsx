import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BreadcrumbSchema = () => {
  const location = useLocation();

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      "/home": "Home",
      "/exercise": "Exercise",
      "/test": "Test",
      "/settings": "Settings",
    };

    const currentPath =
      location.pathname.replace("/englishWords", "") || "/home";
    const currentPage = pathMap[currentPath] || "Home";

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "English Words Trainer",
          item: "https://bitlogicforge.github.io/englishWords/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: currentPage,
          item: `https://bitlogicforge.github.io/englishWords${currentPath}`,
        },
      ],
    };

    // Remove existing breadcrumb script
    const existingScript = document.querySelector("script[data-breadcrumb]");
    if (existingScript) {
      existingScript.remove();
    }

    // Add new breadcrumb script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-breadcrumb", "true");
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector("script[data-breadcrumb]");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location]);

  return null;
};

export default BreadcrumbSchema;
