export default function getListStudentIds(persons) {
  if (Array.isArray(persons)) {
    return persons.map((person) => person.id);
  }
  return [];
}
