import bcrypt from 'bcrypt'
const saltRounds = 10

export const hashPasswordP = (password: string) => {
  new Promise<string>(async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(password, salt)
      resolve(hash)
    } catch (e) {
      reject(e)
    }
  })
}
