"use client";

import { Container } from "lucide-react";
import { useRef, useEffect } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.dataset.loaded) return;

    // create inner widget div with correct double-underscore class
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.width = "100%";
    widgetDiv.style.height = `${height}px`;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    // the embed script reads the JSON configuration from its text content
    script.textContent = JSON.stringify(config);

    container.appendChild(widgetDiv);
    container.appendChild(script);
    container.dataset.loaded = "true";

    return () => {
      if (container) {
        container.innerHTML = "";
        delete container.dataset.loaded;
      }
    };
  }, [scriptUrl, height, config]);

  return containerRef;
};

export default useTradingViewWidget;
