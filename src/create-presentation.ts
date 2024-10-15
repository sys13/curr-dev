import { google } from "npm:googleapis";

// deno-lint-ignore no-explicit-any
export async function createSlideDeck({ auth }: { auth: any }) {
  // Initialize Google Slides API
  const slides = google.slides({ version: "v1" });
  google.options({ auth });

  try {
    // Create a new Google Slides presentation
    const response = await slides.presentations.create({
      requestBody: {
        title: new Date().toLocaleString(),

        // slides: [
        //   {
        //     pageElements: [
        //       {
        //         shape: {
        //           shapeType: "TEXT_BOX",
        //           text: {
        //             textElements: [
        //               {
        //                 textRun: {
        //                   content: "Hello, world!",
        //                   style: {
        //                     fontSize: {
        //                       magnitude: 24,
        //                       unit: "PT",
        //                     },
        //                     link: {
        //                       url: "https://deno.land/",
        //                     },
        //                   },
        //                 },
        //               },
        //             ],
        //           },
        //         },
        //       },
        //     ],
        //   },
        // ],
      },
    });

    const presentationId = await response.data.presentationId;

    await slides.presentations.batchUpdate({
      presentationId,
      requestBody: {
        requests: [
          {
            createSlide: {
              objectId: "slide_1",
              insertionIndex: 0,
              slideLayoutReference: {
                predefinedLayout: "BLANK",
              },
            },
          },
          {
            createShape: {
              objectId: "title_1",
              shapeType: "TEXT_BOX",
              elementProperties: {
                pageObjectId: "slide_1",
                size: {
                  height: {
                    magnitude: 100,
                    unit: "PT",
                  },
                  width: {
                    magnitude: 500,
                    unit: "PT",
                  },
                },
                transform: {
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 50,
                  translateY: 50,
                  unit: "PT",
                },
              },
            },
          },
          {
            insertText: {
              objectId: "title_1",
              insertionIndex: 0,
              text: "Welcome to My Presentation",
            },
          },
          {
            createShape: {
              objectId: "body_1",
              shapeType: "TEXT_BOX",
              elementProperties: {
                pageObjectId: "slide_1",
                size: {
                  height: {
                    magnitude: 200,
                    unit: "PT",
                  },
                  width: {
                    magnitude: 500,
                    unit: "PT",
                  },
                },
                transform: {
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 50,
                  translateY: 200,
                  unit: "PT",
                },
              },
            },
          },
          {
            insertText: {
              objectId: "body_1",
              insertionIndex: 0,
              text: "This is the body content of the first slide.",
            },
          },
          {
            createSlide: {
              objectId: "slide_2",
              insertionIndex: 1,
              slideLayoutReference: {
                predefinedLayout: "BLANK",
              },
            },
          },
          {
            createShape: {
              objectId: "title_2",
              shapeType: "TEXT_BOX",
              elementProperties: {
                pageObjectId: "slide_2",
                size: {
                  height: {
                    magnitude: 100,
                    unit: "PT",
                  },
                  width: {
                    magnitude: 500,
                    unit: "PT",
                  },
                },
                transform: {
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 50,
                  translateY: 50,
                  unit: "PT",
                },
              },
            },
          },
          {
            insertText: {
              objectId: "title_2",
              insertionIndex: 0,
              text: "Slide 2 Title",
            },
          },
          {
            createShape: {
              objectId: "body_2",
              shapeType: "TEXT_BOX",
              elementProperties: {
                pageObjectId: "slide_2",
                size: {
                  height: {
                    magnitude: 200,
                    unit: "PT",
                  },
                  width: {
                    magnitude: 500,
                    unit: "PT",
                  },
                },
                transform: {
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 50,
                  translateY: 200,
                  unit: "PT",
                },
              },
            },
          },
          {
            insertText: {
              objectId: "body_2",
              insertionIndex: 0,
              text: "This is the content for the second slide.",
            },
          },
        ],
      },
    });

    console.log(`Created presentation with ID: ${presentationId}`);

    return presentationId;
  } catch (error) {
    console.error("Error creating presentation:", error);
  }
}
