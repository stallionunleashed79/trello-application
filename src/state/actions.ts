export type AddListAction = { type: 'ADD_LIST', payload: string }
export type AddTaskAction = { type: 'ADD_TASK', payload: { text: string, listId: string } }
export type MoveListAction = { type: 'MOVE_LIST', payload: { draggedById: string, hoverId: string }}
export type Action = AddListAction | AddTaskAction | MoveListAction

export const addTask = (text: string, listId: string): Action => ({
    type: 'ADD_TASK',
    payload: {
        text,
        listId
    }
})

export const addList = (text: string): Action => ({
    type: 'ADD_LIST',
    payload: text
})

export const moveList = (draggedById: string, hoverId: string): Action => ({
    type: 'MOVE_LIST',
    payload: {
        draggedById,
        hoverId
    }
})