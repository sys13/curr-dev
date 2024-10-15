import { google, slides_v1 } from "npm:googleapis";

export async function createSlideDeck({
  requests,
  courseName,
  auth,
}: {
  courseName: string;
  // deno-lint-ignore no-explicit-any
  requests: any;
  // deno-lint-ignore no-explicit-any
  auth: any;
}) {
  // Initialize Google Slides API
  const slides = google.slides({ version: "v1" });
  google.options({ auth });

  try {
    // Create a new Google Slides presentation
    const response = await slides.presentations.create({
      requestBody: {
        title: courseName + new Date().toISOString(),
      },
    });

    const presentationId = await response.data.presentationId;

    await slides.presentations.batchUpdate(
      {
        presentationId,
        requestBody: {
          requests,
        },
      },
      {
        auth,
      }
    );

    console.log(`Created presentation with ID: ${presentationId}`);

    return presentationId;
  } catch (error) {
    console.error("Error creating presentation:", error);
  }
}
