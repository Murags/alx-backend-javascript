export default function createReportObject(employeesList) {
  const ReportObject = {
    allEmployees: {
      ...employeesList,
    },

    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return ReportObject;
}
