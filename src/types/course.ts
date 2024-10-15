import { z } from "zod";

const SlideSchema = z.object({
  fileName: z.string().min(1, "Slide title is required"),
  text: z.string().min(1, "Slide content is required"),
});

const CourseSchema = z.object({
  title: z.string().min(1, "Course title is required"),
  kebabTitle: z.string().min(1, "Course kebab title is required"),
  description: z.string().min(1, "Course description is required"),
  totalDurationInHours: z.number().positive("Total duration must be positive"),
  published: z.boolean().optional(),
  leadCurriculumDev: z.string().optional(),
  leadInstructor: z.string().optional(),
  slides: z.array(SlideSchema),
});

export type Course = z.infer<typeof CourseSchema>;

export type Slide = z.infer<typeof SlideSchema>;
