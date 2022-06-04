import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
query ($id: Int, $page: Int, $search: String, $genre_in: [String]) {
Page (page: $page, perPage: 20) {
  pageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
  media (id: $id, search: $search, isAdult:false, genre_in:$genre_in, genre_not_in:"Hentai") {
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
GenreCollection
# MediaTagCollection
}
`

export default function apiHQ (filter:string, page:number, genreIn:[string]|undefined) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: {
      search: filter || undefined,
      page: page,
      genre_in: genreIn
    }
  })
  return { loading, error, data }
}
