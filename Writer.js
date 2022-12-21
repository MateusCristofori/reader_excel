import fs from 'fs'
import util from 'util'

export class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile)
  }

  async write(fileName, data) {
    try {
      await this.writer(fileName, data)
      return true
    } catch (error) {
      return false
    }
  }
}
