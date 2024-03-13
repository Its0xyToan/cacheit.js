declare class Cache {
    constructor(name: string);
    private getName(): string;
    /**
     * Resets the cache
     * @example
     * ```ts
     * cache.reset();
     * ```
     */
    reset(): void;
    /**
     * Executes a provided function once per each key/value pair in the Cache, in insertion order. (forEach)
     *
     * @example
     * ```ts
     * cache.loop((v) => { console.log(v) })
     * ```
     */
    loop(cb: (value: any, key: any, map: Map<any, any>) => void): void;
    /**
     * Allows to get the specified element from the Cache, If it is an object, changing the object will also change in the Cache
     *
     * @example
     * ```ts
     * cache.get("foo")
     * ```
     */
    get(key: any): any;
    /**
     * Allows to set an element in the Cache, if it already exists, it will be replaced
     *
     * @example
     * ```ts
     * cache.set("foo", "bar")
     * ```
     */
    set(key: any, val: any): void;
    /**
     * Allows to know if a key exists in the Cache
     *
     * @example
     * ```ts
     * cache.has("foo")
     * ```
     */
    has(key: any): boolean;
    /**
     * Allows to know if multiple keys exists in the Cache
     *
     * @example
     * ```ts
     * cache.hasAll("foo", "bar", "foobar")
     * ```
     */
    hasAll(...keys: any[]): boolean;
    /**
     * Allows to know if one of the keys exists in the Cache
     *
     * @example
     * ```ts
     * cache.hasAny("foo", "bar", "foobar")
     * ```
     */
    hasAny(...keys: any[]): boolean;
}

export { Cache };
declare function get(name: string): Cache;
export default get;
