export interface Media {
    coverImage:{
        color:string,
        large:string
    },
    description:string,
    title:{
        romaji:string
    }
}
export interface animeModel {
    GenreCollection:[string]
    Page:{
        pageInfo:{
            currentPage:number,
            hasNextPage: boolean,
            lastPage: number,
            perPage:number,
            total:number
        },
        media:[Media]

    }
}
