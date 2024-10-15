import { createSlideDeck } from "./create-presentation.ts";
import { exportPresentationToPDF } from "./export-to-pdf.ts";
import { auth } from "./get-auth.ts";

const presentationId = await createSlideDeck({ auth });

if (presentationId) {
  exportPresentationToPDF(presentationId);
}
