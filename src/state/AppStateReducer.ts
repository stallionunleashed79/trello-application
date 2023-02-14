import { Action } from "./actions";
import { AppState } from "./AppStateContext";
import { nanoid } from 'nanoid'
import { findItemIndexById } from "../utils/arrayUtils";

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
  switch(action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: []
      })
      break
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const index = findItemIndexById(draft.lists, listId);
      draft.lists[index].tasks.push({
        id: nanoid(),
        text
      })
      break
    }
  }
}