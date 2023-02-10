import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useState } from 'react';
import { useAppState } from '../state/AppStateContext'

type ColumnProps = {
    text: string;
    id: string;
}

const Column = ({ text, id }: ColumnProps) => {
const { getTasksByListId } = useAppState()
const tasks = getTasksByListId(id)
const [ items, setItems ] = useState<Array<string>>(['Generate app scaffold', 'Learn Typescript', 'Begin to use static typing']);
   return  <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        { tasks.map(({ id, text }) => <Card key={id} text={text} id={id}/>)}
        <AddNewItem dark={true} toggleButtonText="+ Add another card" onAdd={(text) => setItems([ ...items, text ])}/>
    </ColumnContainer>
}
export default Column;
