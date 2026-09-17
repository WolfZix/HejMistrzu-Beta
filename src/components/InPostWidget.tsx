import { useEffect, useRef } from "react";

const InPostWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widget = document.createElement("inpost-geowidget");

    widget.setAttribute("token", import.meta.env.VITE_INPOST_TOKEN || "");
    widget.setAttribute("config", "parcelCollect");
    widget.setAttribute("language", "pl");

    containerRef.current.appendChild(widget);

    return () => {
      widget.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-[150px] h-[350px] flex flex-col" />
  );
};

export default InPostWidget;