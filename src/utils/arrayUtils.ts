
type Item = {
    id: string
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => items.findIndex(item => item.id === id)

export const removeItemFromIndex = <T extends Item>(items: T[], index: number) => [...items.slice(0, index), items.slice(index+1)];

export const addItemAtIndex = <T extends Item>(items: T[], item: T, index: number) => [...items.slice(0, index), item, ...items.slice(index)]