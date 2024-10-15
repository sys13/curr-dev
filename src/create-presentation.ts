import { google } from "npm:googleapis";

export async function createSlideDeck({
  auth,
}: {
  auth: Parameters<typeof google.slides>[0]["auth"];
}) {
  // Initialize Google Slides API
  const slides = google.slides({ version: "v1", auth });

  try {
    // Create a new Google Slides presentation
    const response = await slides.presentations.create({
      requestBody: {
        title: "New Slide Deck from Deno (googleapis)",
      },
    });

    const presentationId = response.data.presentationId;
    console.log(`Created presentation with ID: ${presentationId}`);

    return presentationId;
  } catch (error) {
    console.error("Error creating presentation:", error);
  }
}
