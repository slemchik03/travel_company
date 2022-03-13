export interface InitialState {
    offers: Offer[];
    categories: (CategoriesType)[];
    currentCategory: CategoriesType;
}

type OfferTypes = "relax" | "adventures"
export type CategoriesType = "team" | "coupe" | "family"

export interface Offer {
    type: OfferTypes;
    category: CategoriesType;
    date: string;
    title: string;
    price: number;
    img: string;
    days: number;
}
