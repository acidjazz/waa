
import { readFile } from 'fs/promises'


export default async function json (file) {
  return JSON.parse(
    await readFile(
    new URL(file, import.meta.url)
  )
);



}
