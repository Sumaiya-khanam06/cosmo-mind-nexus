import { createFileRoute } from "@tanstack/react-router";
import CosmomindPage from "@/components/CosmomindPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COSMOMIND AI — Multimodal Generative Intelligence for Space Data" },
      {
        name: "description",
        content:
          "COSMOMIND AI fuses satellite imagery, video, audio, and mission text into a unified generative intelligence for space reconstruction, anomaly detection, and Earth observation.",
      },
      { property: "og:title", content: "COSMOMIND AI — Space Data Intelligence" },
      {
        property: "og:description",
        content:
          "Next-gen multimodal AI for space data reconstruction, anomaly detection, and Earth observation.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: CosmomindPage,
});
