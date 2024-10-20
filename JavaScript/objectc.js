let studentsDetails = {
    name: "Suresh",
    address: "Balkumari",


}
let studentsDetails2 = structuredClone(studentsDetails);
studentsDetails2.address = "Prasauni";
console.log(studentsDetails);