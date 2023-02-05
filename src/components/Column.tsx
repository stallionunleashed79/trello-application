import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useState } from 'react';

type ColumnProps = {
    text: string;
}

const Column = ({ text }: ColumnProps) => {
const [ items, setItems ] = useState<Array<string>>(['Generate app scaffold', 'Learn Typescript', 'Begin to use static typing']);
   return  <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        { items.map(item => <Card text={item}/>)}
        <AddNewItem dark={true} toggleButtonText="+ Add another card" onAdd={(text) => setItems([ ...items, text ])}/>
    </ColumnContainer>
}
export default Column;
