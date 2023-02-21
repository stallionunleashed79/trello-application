import { Action } from "./actions";
import { AppState } from "./AppStateContext";
import { nanoid } from 'nanoid'
import { findItemIndexById, moveItem } from "../utils/arrayUtils";

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
    case 'MOVE_LIST': {
        const { draggedById, hoverId } = action.payload;
        const draggedByIndex = findItemIndexById(draft.lists, draggedById);
        const hoverIndex = findItemIndexById(draft.lists, hoverId);
        moveItem(draft.lists, draggedByIndex, hoverIndex)
        break
     }

    default: {
        break
    }
  }
}