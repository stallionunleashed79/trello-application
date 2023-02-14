
type Item = {
    id: string
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => items.findIndex(item => item.id === id)