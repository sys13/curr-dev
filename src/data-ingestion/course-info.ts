import type { Course } from "../../src/types/course.ts";
import { slides } from "./mod1-slides.ts";

export const courseInfo: Course = {
  title: "Introduction to Curriculum Development",
  kebabTitle: "introduction-to-curriculum-development",
  description: "Learn the fundamentals of creating a structured curriculum.",
  totalDurationInHours: 20,
  modules: [
    {
      title: "Module 1: Overview",
      content: "Introduction to curriculum development.",
      durationInHours: 2,
      slides,
    },
    {
      title: "Module 2: Planning",
      content: "How to plan a curriculum.",
      durationInHours: 3,
      slides: [
        {
          title: "Slide 1: Goals and Objectives",
          content: "# Setting clear curriculum goals.",
        },
        {
          title: "Slide 2: Structuring Content",
          content: "# How to structure course content effectively.",
        },
      ],
    },
  ],
  createdBy: "John Doe",
  leadInstructor: "Jane Smith",
  published: true,
};
