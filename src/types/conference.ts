import { ID } from './base'

type Series = {
  id: ID
  name: string
}
type Contact = {
  firstName: string
  lastName: string
  name: string
  about: string
  aboutShort?: string
  company?: string
  tagline?: string
}

type Conference = {
  id: ID
  series: Series
  name: string
  organizer: Contact
}

export default Conference
