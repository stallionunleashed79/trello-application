import { AddNewItem } from './components/AddNewItem';
import Column from './components/Column';
import { AppContainer } from './styles'
import { useAppState } from './state/AppStateContext';

export function App() {
  const { lists } = useAppState()
  return <AppContainer>
    {lists.map(({ id, text }) => <Column key={id} text={text} id={id}/>)}
    <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log('LIST ITEM ADDED')}/>
  </AppContainer>;
}
