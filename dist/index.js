'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let saves = new Map();
let create = (cache) => {
    saves.set(cache.getName(), cache);
};
let get = (name) => {
    return saves.get(name);
};

class Cache {
    constructor(name) {
        this.data = {
            name: null,
            mapper: new Map()
        };
        this.data.name = name;
        if (this.data.name !== ("saves")) {
            create(this);
        }
    }
    getName() { return this.data.name; }
    /**
     * Resets the cache
     * @example
     * ```ts
     * cache.reset();
     * ```
     */
    reset() { this.data.mapper.clear(); }
    /**
     * Executes a provided function once per each key/value pair in the Cache, in insertion order. (forEach)
     *
     * @example
     * ```ts
     * cache.loop((v) => { console.log(v) })
     * ```
     */
    loop(cb) {
        this.data.mapper.forEach(cb);
    }
    ;
    /**
     * Allows to get the specified element from the Cache, If it is an object, changing the object will also change in the Cache
     *
     * @example
     * ```ts
     * cache.get("foo")
     * ```
     */
    get(key) {
        return this.data.mapper.get(key);
    }
    /**
     * Allows to set an element in the Cache, if it already exists, it will be replaced
     *
     * @example
     * ```ts
     * cache.set("foo", "bar")
     * ```
     */
    set(key, val) {
        this.data.mapper.set(key, val);
    }
    /**
     * Allows to know if a key exists in the Cache
     *
     * @example
     * ```ts
     * cache.has("foo")
     * ```
     */
    has(key) {
        return this.data.mapper.has(key);
    }
    /**
     * Allows to know if multiple keys exists in the Cache
     *
     * @example
     * ```ts
     * cache.hasAll("foo", "bar", "foobar")
     * ```
     */
    hasAll(...keys) {
        return keys.every((key) => this.data.mapper.has(key));
    }
    /**
     * Allows to know if one of the keys exists in the Cache
     *
     * @example
     * ```ts
     * cache.hasAny("foo", "bar", "foobar")
     * ```
     */
    hasAny(...keys) {
        return keys.some((key) => this.data.mapper.has(key));
    }
}

exports.Cache = Cache;
exports.default = get;
exports.get = get;
