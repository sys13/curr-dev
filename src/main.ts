import { courseInfos } from "./courses/index.ts";
import { createBatchUpdateForSlide } from "./create-batch-update-for-slide.ts";
import { createMainTitleSlide } from "./create-main-title-slide.ts";
import { createSlideDeck } from "./create-presentation.ts";
import { exportPresentationToPDF } from "./export-to-pdf.ts";
import { auth } from "./get-auth.ts";
import { parseMarkdown } from "./parse-markdown.ts";

for (const course of courseInfos) {
  const slideRequests = course.slides.map((slide, index) => {
    const { attrs, content } = parseMarkdown(slide.text);
    return createBatchUpdateForSlide({
      ...attrs,
      content,
      fileName: slide.fileName,
      insertionIndex: index + 1,
    });
  });

  const presentationId = await createSlideDeck({
    courseName: course.title,
    requests: [createMainTitleSlide({ title: course.title }), ...slideRequests],
    auth,
  });
  if (!presentationId) {
    console.error(`Failed to create presentation for ${course.title}`);
    continue;
  }
  exportPresentationToPDF(presentationId);
}
