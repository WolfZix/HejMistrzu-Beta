import { useEffect, useRef } from "react";

const InPostWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widget = document.createElement("inpost-geowidget");

    widget.setAttribute("token", import.meta.env.VITE_INPOST_TOKEN || "");
    widget.setAttribute("config", "parcelCollect");
    widget.setAttribute("language", "pl");
    widget.setAttribute("onpoint", "onpointselect");

    const handlePointSelect = (event: Event) => {
      console.log("Wybrany Paczkomat:", (event as CustomEvent).detail);
    };
    document.addEventListener("onpointselect", handlePointSelect);

    containerRef.current.appendChild(widget);

    return () => {
      document.removeEventListener("onpointselect", handlePointSelect);
      widget.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full" />
  );
};

export default InPostWidget;