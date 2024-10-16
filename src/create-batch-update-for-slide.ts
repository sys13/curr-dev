export function createBatchUpdateForSlide({
  fileName,
  content,
  title,
  insertionIndex,
}: {
  fileName: string
  content: string
  title: string
  insertionIndex: number
}) {
  const fileNameWithoutExtension = fileName.split('.')[0]
  const titleSlideId = `${fileNameWithoutExtension}title_1`
  const titleId = `${fileNameWithoutExtension}text_box_1`
  const bodyId = `${fileNameWithoutExtension}text_box_2`
  return [
    {
      createSlide: {
        objectId: titleSlideId,
        insertionIndex,
        slideLayoutReference: {
          predefinedLayout: 'BLANK',
        },
      },
    },
    {
      createShape: {
        objectId: titleId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: titleSlideId,
          size: {
            height: {
              magnitude: 100,
              unit: 'PT',
            },
            width: {
              magnitude: 500,
              unit: 'PT',
            },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 50,
            translateY: 50,
            unit: 'PT',
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
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: titleSlideId,
          size: {
            height: {
              magnitude: 200,
              unit: 'PT',
            },
            width: {
              magnitude: 500,
              unit: 'PT',
            },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 50,
            translateY: 200,
            unit: 'PT',
          },
        },
      },
    },
    {
      insertText: {
        objectId: bodyId,
        insertionIndex: 0,
        text: content,
      },
    },
  ]
}
