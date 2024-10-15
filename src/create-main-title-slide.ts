export function createMainTitleSlide({ title }: { title: string }) {
  const titleSlideId = `main_title_title_1`;
  const titleId = `main_title_text_box_1`;
  const bodyId = `main_title_text_box_2`;
  return [
    {
      createSlide: {
        objectId: titleSlideId,
        insertionIndex: 0,
        slideLayoutReference: {
          predefinedLayout: "BLANK",
        },
      },
    },
    {
      createShape: {
        objectId: titleId,
        shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: titleSlideId,
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
        objectId: titleId,
        insertionIndex: 0,
        text: title,
      },
    },
    {
      createShape: {
        objectId: bodyId,
        shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: titleSlideId,
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
  ];
}
