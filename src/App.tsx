import { AddNewItem } from './components/AddNewItem';
import Column from './components/Column';
import { AppContainer } from './styles'
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

export function App() {
  const { lists, dispatch } = useAppState()
  return <AppContainer>
    {lists.map(({ id, text }) => <Column key={id} text={text} id={id}/>)}
    <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))}/>
  </AppContainer>;
}
