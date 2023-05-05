import axios from "axios";
import { ActionTypes } from "../types"

export const getPairs = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://www.binance.com/fapi/v1/exchangeInfo");
        dispatch({
            type: ActionTypes.GET_PAIRS,
            paylaod: data.symbols.map((symbol) => {
                return { label: symbol.symbol, value: symbol.symbol }
            })
        })
    } catch (error) {
        console.error("error while get pair action", error);
    }
}