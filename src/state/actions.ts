export type AddListAction = { type: 'ADD_LIST', payload: string }
export type AddTaskAction = { type: 'ADD_TASK', payload: { text: string, listId: string } }
export type Action = AddListAction | AddTaskAction

export const addTask = (text: string, listId: string): AddTaskAction => ({
    type: 'ADD_TASK',
    payload: {
        text,
        listId
    }
})

export const addList = (text: string): AddListAction => ({
    type: 'ADD_LIST',
    payload: text
})