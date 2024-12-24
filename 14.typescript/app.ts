// let firstName:string = "Muhammed"
// ! firstName = 20  -- Error
// firstName = "Metin";
// console.log(firstName);


// let age:number = 21;
// ! age = '20'  -- Error
// age = 20
// console.log(age);


// let result:boolean = true;


// let age : string | number | boolean = true;
// console.log(age)



// let statusResult: "Pending" | "Approved" | "Rejected";
// statusResult = "Approved";
// console.log(statusResult)


// let names: string[] = ["Muhammed", "Metin", "Musa", "Isa"];
// names.forEach((name) => {
//     console.log(name)
// })


// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers)


// let numbers2: Array<number> = [1, 2, 3];
// console.log(numbers2)


// let mixedArray: (string | number | boolean)[] = [1, 2, "Isa", "Musa", true, false];
// console.log(mixedArray)



// ---------------Type, interface---------------


// type User = {
//     name: string,
//     age: number
// };


// interface User{
//     name: string,
//     age: number
// };

// const obj1: User = {
//     name: "Muhammed",
//     age: 20
// };
// console.log(obj1);

// let arr1: User[] = [{name: "Metin", age: 21}]
// console.log(arr1)



// ---------------- Optional type ----------------
// interface User1{
//     name: string,
//     age?: number
// };

// let arr2: User1[] = [{name: "Metin"}]
// console.log(arr2);



// ---------------- Function ----------------

// function sum(a:number, b:number): any{
//     return "Muhammed";
// }
// console.log(sum(1, 1));


// function showArray(arrays: Array<string>): void{
//     arrays.forEach((array) => console.log(array));
// }

// let arrs = ["Muhammed", "Metin", "Musa", "Isa"];
// showArray(arrs);



// interface User{
//     name: string,
//     age: number,
// }

// const obj1 = {
//     name: "Muhammed",
//     age: 21
// }

// const obj2 = {
//     name: "Metin",
//     age: 21
// };

// const myArr: Array<User> = [obj1, obj2];

// function showObj(objs: Array<User>): void{
//     objs.forEach((obj: User) => console.log(`Name: ${obj.name} - Age: ${obj.age}`))
// }

// showObj(myArr);




// ---------------- Generic types ----------------

// function write<T>(arrays: T[]): void{
//     console.log(arrays);
// }
// write(["Muhammed", "Metin", "Musa", "Isa"]);
// write([1, 2, 3,, 4, 5, 6, 7, 8, 9, 10]);
// write([true, false]);



// interface GenericType<T>{
//     name: string,
//     age: number,
//     salary: T[]
// };

// const obj1: GenericType<string> = {
//     name: "Muhammed",
//     age: 25,
//     salary: ["2500", "5000", "7500", "10000"]
// };

// const obj2: GenericType<number> = {
//     name: "Metin",
//     age: 25,
//     salary: [2500, 5000, 7500, 10000]
// };

// let array: GenericType<string | number>[] = [obj1, obj2];

// function write<T>(arrays: GenericType<T>[]): void{
//     arrays.forEach((array: GenericType<T>) => console.log(array))
// }
// write(array);





// ---------------- Extend ----------------

// interface Common{
//     id: string,
//     creationDate: string,
//     creator: string,
// }

// interface Cutomer extends Common{
//     customerNo: string
// };


// interface Organisation extends Common{
//     organisationNo: string,
// }

// const organisation: Organisation = {
//     id: "1",
//     creationDate: "20.11.2023",
//     creator: "Muhammed",
//     organisationNo: "1"
// };
// console.log(organisation)




// ---------------- Keywords (partial, required, readonly, pick, omit) ----------------

interface User{
    name: string,
    age: number,
    lastname: string,
    birthDate: string
};

// ____________ Optinoal edər ____________
// const user1: Partial<User> = {
//     name: "Muhammed",
//     age: 21
// };
// console.log(user1)


// ____________ Hər şeyi doldurmaq məcburiyyətindəsən ____________
// const user1: Required<User> = {
//     name: "Muhammed",
//     age: 21,
//     lastname: "Gardashov",
//     birthDate: "11.11.2003"
// };
// console.log(user1)



// ____________ Hər şeyi doldurmaq məcburiyyətindəsən ____________
// const user1: Readonly<User> = {
//     name: "Muhammed",
//     age: 21,
//     lastname: "Gardashov",
//     birthDate: "11.11.2003"
// };
// user1.age = 12;
// console.log(user1.age)



// ____________ Yazdığı elementi göstərir ____________
// const user1: Pick<User, "name"> = {
//     name: "Muhammed",
// };
// console.log(user1)



// ____________ Yazdığı elementi göstərmir ____________
const user1: Omit<User, "name"> = {
    age: 21,
    lastname: "Gardashov",
    birthDate: "11.11.2003"
};
console.log(user1)