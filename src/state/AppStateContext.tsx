import { createContext, useContext } from 'react'

type Task = {
    id: string;
    text: string;
}

type List = {
    id: string;
    text: string;
    tasks: Array<Task>
}

export type AppState = {
    lists: Array<List>
}

interface Props {
    children: React.ReactNode;
  }

const appData: AppState = {
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
    getTasksByListId: (id: string) => Array<Task>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider: React.FC<Props> = ({ children }) => {
    const { lists } = appData;
    const getTasksByListId = (id: string) => lists.find(list => list.id === id)?.tasks ?? []

    return (
        <AppStateContext.Provider value={ { lists, getTasksByListId }}>{children}</AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext)