function getFullName(firstname: string, surname: string) {
    //Таким непотребством больше не занимаемся
    //if (typeof firstname !== 'string') {
    //    return new Error("!!!");
    //}
    return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

console.log(getFullName("Гриб", "Вячеслав"));