const fs = require('fs');

function countStudents(path){
    fs.readFile(path, (err, data) =>{
        if (err)
            throw new Error("Cannot load from database");
        let db = data.toString().split("\n");
        db.shift();
        let field = {}
        let total_students = 0;

        for (let elem of db)
        {
            if (elem != "")
            {
                total_students++;
                let key = elem.split(",").pop();
                let name = elem.split(",")[0];
                if (field.hasOwnProperty(key))
                {
                    field[key].push(name);
                }
                else
                {
                    field[key] = [name];
                }
            }
        }
        console.log(`Numbers of students: ${total_students}`);
        for (let elem in field)
        {
            let student_field = field[elem];
            console.log(`Number of students in ${elem} ${student_field.length} List ${student_field.join(", ")}`);
        }
    });
}

module.exports = countStudents;
