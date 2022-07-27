
import fs from 'fs'

export default function json (file) {
  if (process.client) return import(file)
  return JSON.parse(fs.readFileSync(file))
}
