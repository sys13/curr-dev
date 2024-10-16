import { google } from 'npm:googleapis'
import { auth } from './get-auth.ts'
import { writeAll } from 'jsr:@std/io/write-all'

const FILE_NAME = 'output.pdf'

export async function exportPresentationToPDF(presentationId: string) {
  const drive = google.drive({ version: 'v3', auth })

  try {
    // Export the Google Slides presentation as a PDF
    const response = await drive.files.export(
      {
        fileId: presentationId,
        mimeType: 'application/pdf',
      },
      { responseType: 'stream' },
    )

    // Create a file to write to
    const file = await Deno.create(FILE_NAME)

    try {
      // Stream the response to the file
      for await (const chunk of response.data) {
        const uint8ArrayChunk = new Uint8Array(chunk)
        await writeAll(file, uint8ArrayChunk)
      }
    } finally {
      file.close()
    }
    console.log(`Presentation exported to: ${FILE_NAME}`)
  } catch (error) {
    console.error('Error exporting presentation to PDF:', error)
  }
}
