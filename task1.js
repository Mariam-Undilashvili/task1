/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

const firstPerson = {
    name: "Ana",
    age: 28,
}

const secondPerson = {
    name: "levani",
    age: 21,
}

let difference = firstPerson.age - secondPerson.age;

let result = `${firstPerson.name} ${secondPerson.name}ზე ${difference}ით უფროსია`;

console.log(result);





/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების კენტი სიგრძის მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/


const array = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den']
let middle = array[(array.length - 1) / 2]

console.log(middle);




/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/

const student = {

    firstName: `Mariam`,

    lastName: "Undilashvili",
    age: 24,
    subjects: [`phisics1`,`math`, `history`, `geography`, `chemistry`],

roommate: {
    age:18,
    fullName: "Vigaca"
}

}

for (let i=0; i < student.subjects.length; i++) {
    console.log(student.subjects[i])

}


const fullName = student.firstName+student.lastName;

student.fullName=fullName

console.log(fullName)




/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/


const array1 = ["Banana", "Orange", "Apple", "Mango",2,12];

let P=0;

while(typeof array1[p] == 'string') {

    console.log(array1[p]);
    p++;
}




/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/


const array2= [12,23,43,11,9,2,121,90];

if(array2>31 && (array2.length - 1)/2){

console.log("Element is greater than provided value and is EVEN");
}

else{
console.log('Element is less than provided value and is ODD')
}

