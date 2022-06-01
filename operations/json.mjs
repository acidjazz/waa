
import { readFileSync } from 'fs'


export default function json (file) {
  return JSON.parse(readFileSync(file))
}
