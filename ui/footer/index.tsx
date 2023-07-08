import MagicIcon from "@/ui/icons/magic";

export default function Footer() {
  return (
    <footer className="absolute bottom-3 flex items-center ">
      <MagicIcon className="mx-1 h-[16px] w-[16px]" /> template de
      <a
        target="_blank"
        href="https://vercel.com/templates/next.js/novel"
        className="px-1 text-neutral-50 underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
      >
        Vercel
      </a>
      <MagicIcon className="mx-1 h-[16px] w-[16px]" />
    </footer>
  );
}
