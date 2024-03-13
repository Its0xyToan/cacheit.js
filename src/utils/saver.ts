let saves = new Map()

export let create = (cache: any) => {
    saves.set(cache.getName()!, cache)
}

export let get = (name: string): Map<string, any> | null => {
    return saves.get(name) as Map<string, any>
}