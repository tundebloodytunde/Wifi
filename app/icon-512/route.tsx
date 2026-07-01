import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
          borderRadius: 104,
        }}
      >
        <div
          style={{
            fontSize: 256,
            fontWeight: 700,
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          Wf
        </div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
