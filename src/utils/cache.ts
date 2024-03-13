import { create } from "./saver.js";

interface CacheData {
    name: null | string;
    mapper: Map<any, any>
}

export class Cache<K, V> {
    private data: CacheData = {
        name: null,
        mapper: new Map<K, V>()
    };

    constructor(name: string) {
        this.data.name = name;
        if(this.data.name !== (null || "saves")) { create(this) }
    }

    getName(): string | null { return this.data.name; }
    

    /**
     * Resets the cache
     * @example
     * ```ts
     * cache.reset();
     * ```
     */
    public reset(): void { this.data.mapper.clear() }

    /**
     * Executes a provided function once per each key/value pair in the Cache, in insertion order. (forEach)
     * 
     * @example
     * ```ts
     * cache.loop((v) => { console.log(v) })
     * ```
     */
    public loop(cb: (value: V, key: K, map: Map<K, V>) => void): void {
        this.data.mapper.forEach(cb)
    };

    /**
     * Allows to get the specified element from the Cache, If it is an object, changing the object will also change in the Cache
     * 
     * @example
     * ```ts
     * cache.get("foo")
     * ```
     */
    public get(key: K): V | undefined {
        return this.data.mapper.get(key)
    }

    /**
     * Allows to set an element in the Cache, if it already exists, it will be replaced
     * 
     * @example
     * ```ts
     * cache.set("foo", "bar")
     * ```
     */
    public set(key: K, val: V): void {
        this.data.mapper.set(key, val)
    }

    /**
     * Allows to know if a key exists in the Cache
     * 
     * @example
     * ```ts
     * cache.has("foo")
     * ```
     */
    public has(key: K): boolean {
        return this.data.mapper.has(key)
    }

    /**
     * Allows to know if multiple keys exists in the Cache
     * 
     * @example
     * ```ts
     * cache.hasAll("foo", "bar", "foobar")
     * ```
     */
    public hasAll(...keys: K[]): boolean {
        return keys.every((key) => this.data.mapper.has(key))
    }

    /**
     * Allows to know if one of the keys exists in the Cache
     * 
     * @example
     * ```ts
     * cache.hasAny("foo", "bar", "foobar")
     * ```
     */
    public hasAny(...keys: K[]): boolean {
        return keys.some((key) => this.data.mapper.has(key))
    }


}