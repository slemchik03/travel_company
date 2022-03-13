import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { QuoteItem, ServerResponse } from "./types"

export const setQuoteList = createAsyncThunk("quotesList/setQuotes", async () => {
    try {
        const data = (await axios.get<ServerResponse>("https://reqres.in/api/users?page=1")).data
        const processedData: QuoteItem[] = data.data.map(item => {
            return {
                quoteText: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
                quoteInfoText: item.email,
                quoteInfoTitle: item.first_name,
                img: item.avatar
            }
        })
        return processedData
    } catch {
        return []
    }
})