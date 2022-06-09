import { gql, useQuery } from '@apollo/client'
import { animeModel } from '../model/animeModel'

const EXCHANGE_RATES = gql`
query ($id: Int, $page: Int, $search: String, $genre_in: [String], $seasonYear:Int, $type:MediaType) {
Page (page: $page, perPage: 20) {
  pageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
  media (id: $id, search: $search, isAdult:false, genre_in:$genre_in, genre_not_in:"Hentai", type:$type, seasonYear:$seasonYear) {
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
}
`
export interface FilterScheme {
    type: string|undefined,
    'genre_in': string[] | string | undefined,
    seasonYear: number|undefined

}

export const apiHQ = (
  search:string,
  page:number,
  filter:FilterScheme
) => {
  const { loading, error, data } = useQuery<animeModel>(EXCHANGE_RATES, {
    variables: {
      search: search || undefined,
      page: page,
      ...filter
    }
  })

  return { loading, error, data }
}
