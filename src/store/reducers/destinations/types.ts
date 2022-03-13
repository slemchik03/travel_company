export interface InitialState {
    destinationsList: DestinationItem[];
    categories: (Categories)[];
    currentCategory: Categories;
}

export interface DestinationItem {
    rating: number;
    catigory: Categories;
    title: string;
    text: string;
    img: string;
}

export type Categories = "popular" | "advantures" | "beath"