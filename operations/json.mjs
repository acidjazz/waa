
import { readFileSync } from 'fs/promises'


export default async function json (file) {
  return JSON.parse(readFileSync(file))
}
