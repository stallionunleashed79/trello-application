import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from '../state/AppStateContext'
import { addTask } from "../state/actions";

type ColumnProps = {
    text: string;
    id: string;
}

const Column = ({ text, id }: ColumnProps) => {
const { getTasksByListId, dispatch } = useAppState()
const tasks = getTasksByListId(id)
   return  <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        { tasks.map(({ id, text }) => <Card key={id} text={text} id={id}/>)}
        <AddNewItem dark={true} toggleButtonText="+ Add another card" onAdd={(text) => dispatch(addTask(text, id))}/>
    </ColumnContainer>
}
export default Column;
