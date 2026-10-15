import { ImageResponse } from "next/og";
export const alt =
  "Mihaela Covali — Information Technology Student & Aspiring Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#faf9f6",
        color: "#262825",
        padding: 90,
      }}
    >
      <div
        style={{
          fontSize: 19,
          letterSpacing: 4,
          color: "#a44f38",
          marginBottom: 35,
        }}
      >
        CURIOUS MIND. THOUGHTFUL CODE.
      </div>
      <div style={{ fontSize: 96, letterSpacing: -5 }}>Mihaela Covali.</div>
      <div style={{ fontSize: 28, marginTop: 28, color: "#666960" }}>
        Information Technology Student & Aspiring Software Developer
      </div>
      <div style={{ fontSize: 20, marginTop: 48, color: "#a44f38" }}>
        Open to graduation internships · Netherlands / Italy / Spain
      </div>
    </div>,
    size,
  );
}
