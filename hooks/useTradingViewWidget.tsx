"use client";

import { Container } from "lucide-react";
import { useRef, useEffect } from "react";

const UseTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600,
) => {
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ContainerRef.current) return;
    if (ContainerRef.current.dataset.loaded) return;
    ContainerRef.current.innerHTML = `<div class="tradingview-widget-container_widget" style="width:100%; height:${height}px;"></div>`;
    
    const script = document.createElement("script");
    script.src =scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    ContainerRef.current.appendChild(script);
    ContainerRef.current.dataset.loaded = "true";

    return ()=>{
        if(ContainerRef.current){
            ContainerRef.current.innerHTML = '';
            delete ContainerRef.current.dataset.loaded;
        }
    }

  }, [scriptUrl, height, config]);


  return ContainerRef;
};

export default UseTradingViewWidget;
