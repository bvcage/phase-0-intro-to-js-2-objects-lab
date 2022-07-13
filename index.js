// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const returnObj = {...employee};
    delete returnObj[key];
    return returnObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

const employee = {
    name: 'Bailey',
    streetAddress: '123 Main Street',
}
