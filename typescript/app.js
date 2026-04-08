"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bucket {
    constructor(element) {
        this.mas = [];
        this.add(element);
    }
    add(element) {
        this.mas.push(element);
    }
    ;
    delete(element) {
        if (this.mas.length > 0) {
            this.mas = this.mas.filter(item => item.key !== element);
            return true;
        }
        return false;
    }
    ;
    get(key) {
        for (const item of this.mas) {
            if (key === item.key) {
                return item;
            }
        }
    }
}
class Map {
    constructor(iterable) {
        this.buckets = [];
        if (!iterable)
            return;
        iterable.forEach(element => {
            this.set(element.key, element.value);
        });
    }
    /**
     * Функция для определения баккета
     * @param element - ключ элемента
     * @returns number захешированный индекс bucket
     */
    hash(element) {
        var _a, _b;
        let str = element + "";
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % ((_a = this.buckets) === null || _a === void 0 ? void 0 : _a.length) ? (_b = this.buckets) === null || _b === void 0 ? void 0 : _b.length : 1;
    }
    set(key, value) {
        const hash_id = this.hash(key);
        if (this.buckets[hash_id]) {
            this.buckets[hash_id].add({ key, value });
        }
        else {
            this.buckets[hash_id] = new Bucket({ key, value });
        }
        return { key, value };
    }
    delete(key) {
        var _a;
        if (this.buckets.length > 0) {
            return ((_a = this.buckets[this.hash(key)]) === null || _a === void 0 ? void 0 : _a.delete(key)) ? true : false;
        }
        return false;
    }
    get(key) {
        var _a;
        if (this.buckets.length > 0) {
            return (_a = this.buckets[this.hash(key)]) === null || _a === void 0 ? void 0 : _a.get(key);
        }
        return undefined;
    }
    clear() {
        this.buckets = [];
    }
}
const map = new Map();
const obj = { num: 1 };
map.set("2", 2);
map.set(2, 3);
map.set(obj, 3);
map.delete(2);
console.log(map);
console.log(map.delete(2));
console.log(map.get(obj));
map.clear();
//const map2 = new Map([[obj, 1]]);
//console.log(map2.get(obj));
//# sourceMappingURL=app.js.map