import MenuItem from "./components/MenuItem";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";

export default function LeftMenu({
  toggleConfetti,
}: {
  toggleConfetti: () => void;
}) {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };

  // const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  // const onCopy = () => {
  //   if (isCopied) return
  //   //copyToClipboard(value)
  // }

  return (
    <div className="justify-left flex w-full">
      <ul className="absolute top-2 z-10 flex pl-3 sm:pl-0 md:left-5 lg:block">
        <MenuItem name="pdf" onClick={createPDF} tooltip="Descargar en PDF" />
        <MenuItem
          name="image"
          onClick={() => {
            console.log("bajar en imagen");
          }}
          tooltip="Descargar en image -- próximamente"
        />
        <MenuItem
          name="confetti"
          onClick={toggleConfetti}
          tooltip="Explosión de confetti"
        />
        <MenuItem
          name="copy"
          onClick={() => {
            console.log("copiar");
          }}
          tooltip="Copiar como texto"
        />
      </ul>
    </div>
  );
}
