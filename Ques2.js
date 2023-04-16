// 2. Write a JavaScript program to filter the hospitals according to:
// a) Number of Beds > 200
// b) Availability of Beds = Yes
// c) Location = Pune

// Sample Input:
// let hospitals = [
// {
// "id": 1,
// "name":"Hospital A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 2,
// "name":"Hospital B",

// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350.
// “availability”:”Yes”
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",

// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 2,
// "name":"Hospital B",
// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]

//Solution

let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
"availability":"Yes"
},
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
"availability":"No"
},
{
"id": 3,
"name":"Hospital C",
"location":"Pune",
"noOfBeds":350,
"availability":"Yes"
}];

let filteredHospitals1 = hospitals.filter(hospital => hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Delhi");

console.log(filteredHospitals1);

let filteredHospitals = hospitals.filter(hospital => hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Pune");

console.log(filteredHospitals);

let filteredHospitals2 = hospitals.filter(hospital => hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Delhi");

console.log(filteredHospitals2);

let filteredHospitals3 = hospitals.filter(hospital => hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Pune");

console.log(filteredHospitals3);

 let filteredHospitals4 = hospitals.filter(hospital => hospital.noOfBeds < 200 && hospital.availability === "No" && hospital.location === "Pune");

console.log(filteredHospitals4);

let filteredHospitals5 = hospitals.filter(hospital => hospital.noOfBeds > 200 && hospital.availability === "Yes" && hospital.location === "Pune");

console.log(filteredHospitals5);
