import { google } from 'npm:googleapis'
import { auth } from './get-auth.ts'

export async function addViewer(presentationId: string, viewerEmail: string) {
  // @ts-expect-error idk why
  const drive = google.drive({ version: 'v3', auth })

  try {
    // Add viewer permission
    await drive.permissions.create({
      fileId: presentationId,
      requestBody: {
        role: 'reader',
        type: 'user',
        emailAddress: viewerEmail,
      },
    })

    console.log(
      `Successfully added ${viewerEmail} as a viewer to presentation with ID: ${presentationId}`,
    )
  } catch (error) {
    console.error('Error adding viewer permission:', error)
  }
}
