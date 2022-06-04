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
  media (id: $id, search: $search, isAdult:false, genre_not_in:"Hentai") {
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

export default function apiHQ (filter:string, page:number) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: {
      search: filter || undefined,
      page: page
    }
  })
  return { loading, error, data }
}
