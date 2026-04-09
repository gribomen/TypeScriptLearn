function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<number>(10);


function getSplitHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.slice(0, 1);
}

getSplitHalf<number>([1, 3, 4]);

const splite: <T>(data: Array<T>) => Array<T> = getSplitHalf;

interface ILogLine<T> {
    timeStamp: Date,
    data: T
}

type LogLineType<T> = {
    timeStamp: Date,
    data: T
}

const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

