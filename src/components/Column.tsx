import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
    text: string;
}

const Column = ({ text }: ColumnProps) => 
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <Card text="Generate app scaffold"/>
        <Card text="Learn Typescript"/>
        <Card text="Begin to use static typing"/>
        <AddNewItem dark={true} toggleButtonText="+ Add another card" onAdd={() => console.log(`NEW ITEM ADDED`)}/>
    </ColumnContainer>

export default Column;
