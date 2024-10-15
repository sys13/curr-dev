import { google } from "npm:googleapis";
import { auth } from "./get-auth.ts";
import { writeAll } from "jsr:@std/io/write-all";

// Export the presentation as a PDF
export async function exportPresentationToPDF(presentationId: string) {
  // Initialize Google Drive API
  const drive = google.drive({ version: "v3", auth });

  try {
    // Export the Google Slides presentation as a PDF
    const response = await drive.files.export(
      {
        fileId: presentationId,
        mimeType: "application/pdf",
      },
      { responseType: "stream" }
    );

    // Create a file to write to
    const file = await Deno.open("output.txt", { write: true, create: true });

    try {
      // Stream the response to the file
      for await (const chunk of response.data) {
        const uint8ArrayChunk = new Uint8Array(chunk);
        await writeAll(file, uint8ArrayChunk);
      }
    } finally {
      file.close();
    }
    const filePath = "output.pdf";
    console.log(`Presentation exported to: ${filePath}`);
  } catch (error) {
    console.error("Error exporting presentation to PDF:", error);
  }
}
