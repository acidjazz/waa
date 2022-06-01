
import fs from 'fs'

export default function json (file) {
  return JSON.parse(fs.readFileSync(file))
}
