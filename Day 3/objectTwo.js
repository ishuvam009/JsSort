const user1 = {name: 'shuvam', age: 23}
const user2 = {name: 'biswa', age: 24};
const user3 = {name: 'abhi', age: 22};

const newUser= {... user1, ...user2, ...user3}

// console.log(newUser)

//destructure

let course = {
    courseName: 'JS Cohort',
    coursePrice: 999,
    courseInstructor: 'Shuavm'
}

const {courseInstructor: instructor} = course;

console.log(instructor)