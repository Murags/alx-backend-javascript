export default function updateStudentGradeByCity(persons, city, newGrades) {
  if (Array.isArray(persons) && Array.isArray(newGrades)) {
    const cityStudents = persons.filter((person) => person.location === city);

    return cityStudents.map((student) => {
      const studentGrade = newGrades.filter((grade) => student.id === grade.studentId)[0];
      if (studentGrade !== undefined) {
        /*eslint-disable */
        student.grade = studentGrade.grade;
      } else {
        student.grade = 'N/A';
        /* eslint-enable */
      }
      return student;
    });
  }
  return [];
}
