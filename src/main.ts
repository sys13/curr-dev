import { addViewer } from "./add-viewer.ts";
import { courseInfos } from "./courses/index.ts";
import { createSlideDeck } from "./create-presentation.ts";
import { exportPresentationToPDF } from "./export-to-pdf.ts";
import { auth } from "./get-auth.ts";

for (const course of courseInfos) {
  console.log(course);
  // const presentationId = await createSlideDeck({
  //   courseName: course.title,
  //   auth,
  // });
}
