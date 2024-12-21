import type { CSSProperties } from "react";

export function LoadingSpinner() {
  const spinnerStyle: CSSProperties = {
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderLeft: "4px solid #000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div style={spinnerStyle} />
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
