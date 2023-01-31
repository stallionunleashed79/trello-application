import { ColumnContainer, ColumnTitle } from "../styles";
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
    </ColumnContainer>

export default Column;
