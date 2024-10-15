import * as mod from "jsr:@std/front-matter";
import { z } from "zod";

const attrsSchema = z.object({
  title: z.string(),
  speakerNotes: z.string().optional(),
  layout: z.enum(["standard"]).optional(),
});

export function parseMarkdown(markdownText: string) {
  const obj = mod.extractYaml(markdownText);

  const attrs = attrsSchema.parse(obj.attrs);
  return {
    attrs,
    content: obj.body,
  };
}
