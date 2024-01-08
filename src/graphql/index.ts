import gql from 'graphql-tag'

const CONFERENCE_QUERY = gql`
  query conferences {
    conferences {
      id
      series {
        id
        name
      }
      name
      organizer {
        firstName
        lastName
        name
        about
        aboutShort
        company
        tagline
      }
    }
  }
`

export default CONFERENCE_QUERY
