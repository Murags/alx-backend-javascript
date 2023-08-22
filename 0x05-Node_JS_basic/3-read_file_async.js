const fs = require('fs');

async function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) { reject(Error('Cannot load from database')); } else {
        const db = data.toString().split('\n');
        db.shift();
        const field = {};
        let totalStudents = 0;

        for (const elem of db) {
          if (elem !== '') {
            totalStudents++;
            const key = elem.split(',').pop();
            const name = elem.split(',')[0];
            if (Object.prototype.hasOwnProperty.call(field, key)) {
              field[key].push(name);
            } else {
              field[key] = [name];
            }
          }
        }
        console.log(`Numbers of students: ${totalStudents}`);
        for (const elem in field) {
          const studentField = field[elem];
          console.log(`Number of students in ${elem}: ${studentField.length}. List: ${studentField.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
