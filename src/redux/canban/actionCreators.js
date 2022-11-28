import { ADD_CARD, DELETE_CARD, GET_CARDS, MOVE_CARD, UPDATE_CARD } from "./actions";

export const getCards = (payload) => ({
  type: GET_CARDS,
  payload
});

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload
});

export const moveCard = (payload) => ({
  type: MOVE_CARD,
  payload
});

export const updateCard = (payload) => ({
  type: UPDATE_CARD,
  payload
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload
});

// THUNKS
export const getCardsThunk = () => {
  return (dispatch) => {
      dispatch(getCards())
  }
}

export const addCardThunk = (payload) => {
  return (dispatch) => {
      dispatch(addCard(payload));
  }
}

export const deleteCardThunk = ({id, row}) => {
  return (dispatch) => {
      dispatch(deleteCard({id, row}))
  }
}

export const moveCardThunk = (payload) => {

  return (dispatch) => {
      dispatch(moveCard(payload))
    
  }
}

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { cardsService } from "services/cards.service";


// export const getCardsThunk = createAsyncThunk("products/cards", async function () {
//   const response = await cardsService.getCards();
//   const data = await response.data
//   return data;
// })

// export const getDetailedCardThunk = createAsyncThunk("products/detailed", async function (id) {
//   const resp = await cardsService.getCard(id)
//   const data = resp.data
//   return data
// })

// export const switchCardFavoriteThunk = createAsyncThunk("products/switchFav", async (obj) => {
//   const resp = await cardsService.update({ ...obj, isFavorite: !obj.isFavorite })
//   return resp.data
// })