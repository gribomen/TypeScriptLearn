interface Vehicle {
    run: number;
}

function kmToMilles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

interface LCV extends Vehicle {
    capacity: number;
}

//const vehicle = kmToMilles(new Vehicle());
//const lcv = kmToMilles(new LCV());
kmToMilles({ run: 1 });

function logId<T extends string | number, Y>(id: T, additionData: Y): { id: T, data: Y } {
    console.log(id);
    console.log(additionData);
    return { id, data: additionData };
}