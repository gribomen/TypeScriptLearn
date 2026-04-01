function getFullName(userEntity: { firstname: string, surname: string }): string {
    //Таким непотребством больше не занимаемся
    //if (typeof firstname !== 'string') {
    //    return new Error("!!!");
    //}
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Вячеслав',
    surname: 'Гриб',
    city: 'Ust-Labinsk',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
}

console.log(getFullName(user));