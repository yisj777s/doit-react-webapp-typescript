import Chance from 'chance'
const chance = new Chance()

export const randomUUID = () => chance.guid()
