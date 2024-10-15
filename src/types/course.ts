import { z } from "zod";

const SlideSchema = z.object({
  title: z.string().min(1, "Slide title is required"),
  content: z.string().min(1, "Slide content is required"),
});

const ModuleSchema = z.object({
  title: z.string().min(1, "Module title is required"),
  content: z.string().min(1, "Module content is required"),
  durationInHours: z.number().positive("Duration must be positive"),
  slides: z.array(SlideSchema).min(1, "At least one slide is required"),
});

const CourseSchema = z.object({
  title: z.string().min(1, "Course title is required"),
  kebabTitle: z.string().min(1, "Course kebab title is required"),
  description: z.string().min(1, "Course description is required"),
  totalDurationInHours: z.number().positive("Total duration must be positive"),
  modules: z.array(ModuleSchema).min(1, "At least one module is required"),
  createdBy: z.string().min(1, "Course creator is required"),
  published: z.boolean().optional(),
  leadInstructor: z.string().optional(),
});

export type Course = z.infer<typeof CourseSchema>;

export type Slide = z.infer<typeof SlideSchema>;
