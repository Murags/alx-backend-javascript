export default function getStudentIdsSum(persons) {
  if (Array.isArray(persons)) {
    return persons.reduce((sumUp = 0, person) => sumUp + person.id, 0);
  }

  return [];
}
