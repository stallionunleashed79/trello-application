import { createContext, useContext, Dispatch } from 'react'
import { appStateReducer } from './AppStateReducer';
import  { useImmerReducer } from 'use-immer'
import { Action } from './actions';
import { DragItem } from '../DragItem'

export type Task = {
    id: string;
    text: string;
}

export type List = {
    id: string;
    text: string;
    tasks: Array<Task>
}

export type AppState = {
    lists: Array<List>
    draggedItem: DragItem | null
}

interface Props {
    children: React.ReactNode;
  }

const appData: AppState = {
    draggedItem: null,
    lists:[
        {
            id: '0',
            text: 'To Do',
            tasks: [
                {
                    id: 'c0',
                    text: 'Generate App Scaffold'
                }
            ]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [
                {
                    id: 'c1',
                    text: 'Learn Typescript'
                }
            ]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [
                {
                    id: 'c2',
                    text: 'Begin to use static typing'
                }
            ]
        }
    ]
}

type AppStateContextProps = {
    lists: Array<List>,
    getTasksByListId: (id: string) => Array<Task>,
    dispatch: Dispatch<Action>
    draggedItem: DragItem | null
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    const { lists, draggedItem } = state;
    const getTasksByListId = (id: string) => lists.find(list => list.id === id)?.tasks ?? []

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>{children}</AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext)