const obj: Record<string, number> = {
    a: 1,
    b: 2
}

type TRecord = Record<string, number>;
type TUNRecord = Record<number, string>;
function swapKeysAndValues<T extends TRecord>(obj: T): TUNRecord {
    const obj2 = {};
    Object.keys(obj).forEach(item => obj2[obj[item]!] = item);
    return obj2;
}

const res = swapKeysAndValues(obj);

console.log(res);

/*
{
  1: 'a',
  2: 'b'
}
*/