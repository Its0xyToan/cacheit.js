let saves = new Map();
export let create = (cache) => {
    saves.set(cache.getName(), cache);
};
export let get = (name) => {
    return saves.get(name);
};
