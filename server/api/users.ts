import { readFile } from 'fs/promises'
import * as d3 from 'd3'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const filePath = join(process.cwd(), 'public', 'users.csv');
  const csvContent = await readFile(filePath, 'utf-8');

  const dsv = d3.dsvFormat(';')
  const data = dsv.parse(csvContent)

  return data
})