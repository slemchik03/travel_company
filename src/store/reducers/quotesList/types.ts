export interface InitialState {
    quoteList: QuoteItem[],
    currentPosition: number,
    lastPositionIndex: number
}

export interface QuoteItem {
    quoteText: string,
    quoteInfoTitle: string,
    quoteInfoText: string,
    img: string,
}
export interface ServerResponse {
    data: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    }[]
}