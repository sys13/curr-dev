import { google } from 'npm:googleapis'

const serviceAccount = JSON.parse(
  new TextDecoder('utf-8').decode(Deno.readFileSync('./cred.json')),
)

// Set up JWT auth client
export const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: [
    'https://www.googleapis.com/auth/presentations',
    'https://www.googleapis.com/auth/drive',
  ],
})
