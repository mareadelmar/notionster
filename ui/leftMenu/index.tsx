import MenuItem from "./components/MenuItem";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

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

  return (
    <ul className="absolute left-5 top-5 z-10">
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
    </ul>
  );
}
