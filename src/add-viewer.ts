// Import the required modules
import { google } from "npm:googleapis";
import { auth } from "./get-auth.ts";

// Function to add viewer permission to a presentation
export async function addViewer(presentationId: string, viewerEmail: string) {
  // Initialize Google Drive API
  const drive = google.drive({ version: "v3", auth });

  try {
    // Add viewer permission
    await drive.permissions.create({
      fileId: presentationId,
      requestBody: {
        role: "writer", // 'reader' gives view-only access
        type: "user", // Can also be 'group', 'domain', etc.
        emailAddress: viewerEmail, // The email address to grant access
      },
    });

    console.log(
      `Successfully added ${viewerEmail} as a viewer to presentation with ID: ${presentationId}`
    );
  } catch (error) {
    console.error("Error adding viewer permission:", error);
  }
}
