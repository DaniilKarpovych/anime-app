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

export default function apiHQ (filter:string) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: {
      search: filter || undefined
    }
  })
  return { loading, error, data }
}
