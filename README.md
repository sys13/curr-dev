# curr-dev

TLDR: **Markdown -> Google Slides**

Create a course config:

<img width="1007" alt="Screenshot 2024-10-16 at 3 37 43 PM" src="https://github.com/user-attachments/assets/7e9b4ff6-321b-43a5-993e-948a96ae37ba">

Add a Markdown file (with Front Matter for structured data):

<img width="289" alt="Screenshot 2024-10-16 at 3 37 54 PM" src="https://github.com/user-attachments/assets/593a4760-0a61-4243-9fd6-fd3d10aee66c">

It automatically creates Google Slides (and can output it as PDF for local
viewing):

<img width="607" alt="Screenshot 2024-10-16 at 3 38 06 PM" src="https://github.com/user-attachments/assets/4222e2d9-d375-49dd-b9b6-c88967443a86">

## How to setup dev

1. Install deno
2. In Google Cloud create a project and service account with slides + drive
   permissions
3. Save JWT info in `cred.json`
4. Use `deno fmt`, `deno lint --fix`, `deno test`
5. Run with `deno task dev`
