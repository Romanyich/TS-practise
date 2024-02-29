interface IUsers {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users = [
    {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
    },
    {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
    },
    {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
    }
]

/* Task 1 <---------> */
let userName: string = ''
users.forEach(element => {
    userName = userName + element.name + ', '
})
userName = userName.slice(0, -2)
console.log('Task 1: ' + userName)

/* Task 2 <---------> */
let vehicleNumber: number = 0
users.forEach(element => {
    if (element.cars != undefined) {
        vehicleNumber += element.cars.length
    }
})
console.log('Task 2: ' + vehicleNumber)

/* task 3 <---------> */
function removeEducationLess (arr: IUsers[]): IUsers[] {
    let withEducation = arr.filter((element) =>
        element.hasEducation === true
    )
    return withEducation
}
console.log('Task 3:')
console.log(removeEducationLess(users))

/* Task 4 <---------> */
function removePetLess (arr: IUsers[]): IUsers[] {
    let withPets = arr.filter((element) =>
        element.animals != undefined
    )
    return withPets
}
console.log('Task 4:')
console.log(removePetLess(users))

/* Task 5 <---------> */
function getVehicles (arr: IUsers[]): string {
    let vehiclesList = ''
    users.forEach(element => {
        if (element.cars != undefined) {
            element.cars.forEach(item => {
                vehiclesList += item + ', '
            });
        }
    })
    return vehiclesList.slice(0, -2)
}
console.log('Task 5:')
console.log(getVehicles(users))