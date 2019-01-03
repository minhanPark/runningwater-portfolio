import { SET_INPUT, FILTER_LISTS } from "./actions";

export const setInput = value => ({
  type: SET_INPUT,
  value
});

export const filterLists = viewList => ({
  type: FILTER_LISTS,
  viewList
});
