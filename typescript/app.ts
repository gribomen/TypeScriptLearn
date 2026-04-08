type ElementMap = { key: any, value: any };

class Bucket {
    private mas: ElementMap[] = [];
    constructor(element: ElementMap) {
        this.add(element);
    }

    add(element: ElementMap) {
        this.mas.push(element)
    };

    delete(element: any): boolean {
        if (this.mas.length > 0) {
            this.mas = this.mas.filter(item => item.key !== element);
            return true;
        }

        return false;
    };

    get(key: any): any {
        for (const item of this.mas) {
            if (key === item.key) {
                return item;
            }
        }

    }
}

class Map {
    private buckets: Bucket[] = [];
    typeKey: any;
    constructor(iterable?: ElementMap[]) {
        if (!iterable) return;
        iterable.forEach(element => {
            this.set(element.key, element.value);
        });
    }

    /**
     * Функция для определения баккета
     * @param element - ключ элемента
     * @returns number захешированный индекс bucket
     */
    private hash(element: any): number {
        let str = element + "";
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % this.buckets?.length ? this.buckets?.length : 1;
    }

    set(key: any, value: any): ElementMap {
        const hash_id = this.hash(key);
        if (this.buckets[hash_id]) {
            this.buckets[hash_id].add({ key, value })
        } else {
            this.buckets[hash_id] = new Bucket({ key, value });
        }
        return { key, value };
    }

    delete(key: any): boolean {
        if (this.buckets.length > 0) {
            return this.buckets[this.hash(key)]?.delete(key) ? true : false;
        }
        return false;
    }

    get(key: any): any {
        if (this.buckets.length > 0) {
            return this.buckets[this.hash(key)]?.get(key);
        }
        return undefined
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