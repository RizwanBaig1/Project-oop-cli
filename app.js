import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (person) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whom would yo like to intreact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("you approach the staff room.Please feel free to ask any question.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name wish to engage with :"
            });
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name},nice to meet you!`);
                console.log("New student added");
                console.log("current student list:");
                console.log(person.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again:`);
                console.log("Exisiting student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program");
            process.exit();
        }
    } while (true);
};
programStart(persons);
