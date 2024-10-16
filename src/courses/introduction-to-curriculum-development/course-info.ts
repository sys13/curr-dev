import { getSlideTexts } from '../../get-slide-md.ts'
import type { Course } from '../../types/course.ts'

export const courseInfo: Course = {
  title: 'Introduction to Curriculum Development',
  kebabTitle: 'introduction-to-curriculum-development',
  description: 'Learn the fundamentals of creating a structured curriculum.',
  totalDurationInHours: 4,
  leadCurriculumDev: 'John Doe',
  leadInstructor: 'Jane Smith',
  published: true,
  slides: await getSlideTexts('introduction-to-curriculum-development'),
}
