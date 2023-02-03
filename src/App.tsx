import { AddNewItem } from './components/AddNewItem';
import Column from './components/Column';
import { AppContainer } from './styles'

export function App() {
  return <AppContainer>
    <Column text="To Do"></Column>
    <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log('LIST ITEM ADDED')}/>
  </AppContainer>;
}
