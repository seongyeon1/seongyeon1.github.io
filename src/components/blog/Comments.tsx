"use client";

import { useEffect, useRef, useState } from "react";

const GISCUS_REPO = "seongyeon1/seongyeon1.github.io";
const GISCUS_REPO_ID = "R_kgDOSX5tLA";
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = "DIC_kwDOSX5tLM4C8sKD";
const GISCUS_ORIGIN = "https://giscus.app";

const resolveTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark_dimmed" : "light";

const Comments = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  // Lazy mount when user scrolls within 200px of the container.
  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldMount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount]);

  // Inject Giscus script once mounted, with the current theme.
  useEffect(() => {
    if (!shouldMount || !containerRef.current) return;
    const node = containerRef.current;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("data-theme", resolveTheme());
    node.appendChild(script);

    return () => {
      node.innerHTML = "";
    };
  }, [shouldMount]);

  // Sync theme on <html class="dark"> changes.
  useEffect(() => {
    if (!shouldMount) return;

    const sync = () => {
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: resolveTheme() } } },
        GISCUS_ORIGIN
      );
    };

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [shouldMount]);

  return <div ref={containerRef} className="giscus min-h-[200px]" />;
};

export default Comments;
