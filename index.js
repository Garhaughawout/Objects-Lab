var employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return employee = {...employee, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    delete employee[key]
    employee[key] = value
    console.log(employee)
    return employee 
}

function deleteFromEmployeeByKey(employee, key) {
    return employee = {...employee, [key]: undefined}
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

console.log(employee)