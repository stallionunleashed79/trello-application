import { useState } from 'react';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

type AddNewItemProps = {
    onAdd: (text: string) => void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps ) => {
    const [ showForm, setShowForm ] = useState(false);
    const handleOnAdd = (text: string) => {
        onAdd(text);
        setShowForm(false);
    }
    if (showForm) {
      return <NewItemForm onAdd={(text) => handleOnAdd(text)}/>
    }
    return <AddItemButton dark={dark} onClick={() => setShowForm(true)}>{toggleButtonText}</AddItemButton>
}