import fs from 'fs'
import util from 'util'

export class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile)
  }

  async read(filePath) {
    try {
      return await this.reader(filePath, 'utf-8')
    } catch (error) {
      return undefined
    }
  }
}
