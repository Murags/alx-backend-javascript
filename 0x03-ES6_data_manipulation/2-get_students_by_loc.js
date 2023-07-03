export default function getStudentsByLocation(persons, loc) {
  if (Array.isArray(persons)) {
    return persons.filter((person) => person.location === loc);
  }

  return [];
}
