import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
query ($id: Int, $page: Int, $search: String) {
Page (page: $page, perPage: 20) {
  pageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
  media (id: $id, search: $search) {
    id
    title {
      romaji
    }
    description
    coverImage{
      large
      color
    }
  }
}
}
`

export default function apiHQ () {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  console.log(data)
  return { loading, error, data }
}
