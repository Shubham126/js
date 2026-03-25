const people = [
  {
    id: 1,
    firstName: "Subham",
    lastName: "Kumar",
    fatherName: "Rajesh Kumar",
    age: 22,
    email: "subham.kumar@example.com"
  },
  {
    id: 2,
    firstName: "Amit",
    lastName: "Sharma",
    fatherName: "Suresh Sharma",
    age: 25,
    email: "amit.sharma@example.com"
  },
  {
    id: 3,
    firstName: "Priya",
    lastName: "Verma",
    fatherName: "Mahesh Verma",
    age: 23,
    email: "priya.verma@example.com"
  },
  {
    id: 4,
    firstName: "Rahul",
    lastName: "Singh",
    fatherName: "Rakesh Singh",
    age: 27,
    email: "rahul.singh@example.com"
  },
  {
    id: 5,
    firstName: "Neha",
    lastName: "Gupta",
    fatherName: "Anil Gupta",
    age: 24,
    email: "neha.gupta@example.com"
  }
];

const updatedPeople = people.map((person, index) => ({
  id: index + 1,
  ...person,
  fatherName: "Unknown" // or dynamic value
}));

console.log(updatedPeople);