import { assertObjectMatch } from "jsr:@std/assert";
import { parseMarkdown } from "./parse-markdown.ts";

const example = `
---
title: Hello
---
- bullet1
- bullet2
`.trim();

Deno.test("parses markdown", () => {
  // import the markdown
  // parse the markdown
  // see the output
  const results = parseMarkdown(example);
  assertObjectMatch(results, {
    attrs: { title: "Hello" },
    content: "- bullet1\n- bullet2",
  });
});
