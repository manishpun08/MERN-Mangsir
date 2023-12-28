// object is a key value pair separated by colon.
// complex data structure
//groping of data with similar characteristic.

// let myDetails = {
//   firstName: "Manish",
//   lastName: "Pun Magar",
//   address: "ktm",
//   age: 23,
//   contact: "9876543212",
//   email: "manish@gmail.com",
//   isMarried: false,
//   isGraduated: null,
// };
// console.log(myDetails);
// console.log(typeof myDetails);

// CRUD
// Create/ Add
// Read/Retrieve
// Update/Edit
// Delete/REmove

//? dot operator (.)
//? square operator ([])

// console.log(myDetails.firstName);
// console.log(myDetails["email"]);

//? Create/Add
// myDetails.laptop = "Mac";
// console.log(myDetails);

// myDetails["college"] = "LBEF";
// console.log(myDetails);

//? Delete/Remove
// delete myDetails.contact;
// console.log(myDetails);

// delete myDetails["email"];
// console.log(myDetails)

//? Update/Edit  (Upsert = Update or Insert)
// myDetails.address = "Pyuthan";
// console.log(myDetails);

// myDetails.postaCode = "4421";
// console.log(myDetails);

// ? 1.objects are used in js for following purpose
// Data Organization:
// Code Reusability:
// Dynamic Nature:
// JSON (JavaScript Object Notation):
// Event Handling:

// let myHouseDetails = {
//   numberOfRooms: "4",
//   numberOfMembers: "3",
//   colorOfHouse: "orange",
//   builtYear: "2007",
//   numberOfStorey: "3",
//   estimatedPriceOfHouse: "2 crores",
// };
// delete myHouseDetails.builtYear;
// myHouseDetails.numberOfRooms= "5";
// myHouseDetails.estimatedPriceOfHouse= "2 crore";

// “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.
// console.log(myHouseDetails);
// console.log(
//   `I have ${myHouseDetails.colorOfHouse} house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`
// );

// console.log(
//   "I have a " +
//     myHouseDetails.colorOfHouse +
//     " coloured house with " +
//     myHouseDetails.numberOfRooms +
//     " rooms where " +
//     myHouseDetails.numberOfMembers +
//     " people are living. The house is " +
//     myHouseDetails.numberOfStorey +
//     " storey and was built in " +
//     myHouseDetails.builtYear +
//     " with an estimated budget of " +
//     myHouseDetails.estimatedPriceOfHouse +
//     "."
// );

//? yes we can create object inside an object. for eg.
// Outer object
// let person = {
//   firstName: "Manish",
//   lastName: "magar",
//   age: 30,
//   address: {
//insider object
//     street: "kumarimata",
//     city: "baneshwor",
//     zipCode: "12345",
//   },
// };

// console.log(person.firstName);
// console.log(person.address.city);
// delete person.address.city;
// console.log(person);

// let x = 5;
// let y = x;   //value copy
// x = 4;
// console.log(y);

// let collegeDetails = {
//   name: "ABC",
//   addres: "ktm",
// };
//shallow operator
// let NewCollegeDetails = collegeDetails; // address copy = same value
// console.log(NewCollegeDetails);

//spread operator
// let NewCollegeDetails = { ...collegeDetails };
// NewCollegeDetails.name = "xyz";
// console.log(collegeDetails);

// structuredClone => deep copy
// let universityDetails = {
//   name: "TU",
//   address: {
//     temporary: "pokhara",
//     permanent: "ktm",
//   },
// };

// let newUniversityDetails = structuredClone(universityDetails);
// universityDetails.address.temporary = "A";
// console.log(universityDetails);
