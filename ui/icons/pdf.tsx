export default function Pdf({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 15 15"
      className={className ?? ""}
    >
      <path
        fill="currentColor"
        d="M3.5 8H3V7h.5a.5.5 0 0 1 0 1ZM7 10V7h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5v-12ZM3.5 6H2v5h1V9h.5a1.5 1.5 0 1 0 0-3Zm4 0H6v5h1.5A1.5 1.5 0 0 0 9 9.5v-2A1.5 1.5 0 0 0 7.5 6Zm2.5 5V6h3v1h-2v1h1v1h-1v2h-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
