import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM,LOADING_TOGGLE,MARK_ITEM } from "./actionType";

export const addItem = createAction(ADD_ITEM, (item) => ({
  payload: item,
}));

export const deleteItem = createAction(DELETE_ITEM, (item) => ({
  payload: item,
}));

export const markItem = createAction(MARK_ITEM, (item) => ({
    payload: item
}));
