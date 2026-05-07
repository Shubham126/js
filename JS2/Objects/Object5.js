//Destructuring an Object

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Shubham Kumar",
    courseDetails: {
        courseDuration: "3 months",
        courseLevel: "Beginner to Advanced",
    }
}

const {coursename} = course

console.log(coursename);

const {courseInstructor: instructor} = course

console.log(instructor);