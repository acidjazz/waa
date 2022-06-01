
import { readFileSync } from 'fs'


export default async function json (file) {
  return JSON.parse(readFileSync(file))
}
