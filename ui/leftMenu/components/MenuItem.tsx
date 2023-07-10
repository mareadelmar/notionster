import { useMemo } from "react";
import PDFIcon from "@/ui/icons/pdf";
import ImageIcon from "@/ui/icons/image";
import MagicIcon from "@/ui/icons/magic";
import CopyIcon from "@/ui/icons/copy";

export default function MenuItem({
  onClick,
  name,
  tooltip,
}: {
  onClick: () => void;
  name: string;
  tooltip: string;
}) {
  const icon = useMemo(() => {
    switch (name) {
      case "pdf":
        return (
          <PDFIcon className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]" />
        );
      case "image":
        return (
          <ImageIcon className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
        );
      case "confetti":
        return (
          <MagicIcon className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
        );
      case "copy":
        return (
          <CopyIcon className="h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" />
        );
      default:
        break;
    }
  }, [name]);

  return (
    <li className="px-2 py-1">
      <div
        id={`tooltip-${name}`}
        role="tooltip"
        className="transititext-primary text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 transition duration-150 ease-in-out"
        data-te-toggle="tooltip"
        title={tooltip}
      >
        <button
          className="max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
          onClick={onClick}
          role="icon"
          type="button"
          data-tooltip-target={`tooltip-${name}`}
          // disabled={name === "copy"}
        >
          {icon}
        </button>
      </div>
    </li>
  );
}
