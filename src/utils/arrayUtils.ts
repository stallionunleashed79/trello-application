
type Item = {
    id: string
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => items.findIndex(item => item.id === id)

export const removeItemFromIndex = <T extends Item>(items: T[], index: number) => [...items.slice(0, index), items.slice(index+1)] as T[];

export const insertItemAtIndex = <T extends Item>(items: T[], item: T, index: number) => [...items.slice(0, index), item, ...items.slice(index)]

export const moveItem = <T extends Item>(items: T[], from: number, to: number) => {
    const item = items[from];
    return insertItemAtIndex(removeItemFromIndex(items, from), item, to)
}