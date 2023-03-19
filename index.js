// Write your solution in this file!
const employee = {
    name : "Guled",
    streetAddress : "no:8"

}

function updateEmployeeWithKeyAndValue (obj,key,value){

    let NewEmployee = {...employee};
    
     NewEmployee[key]=value;

     return NewEmployee;

}

const employee2 = updateEmployeeWithKeyAndValue (employee, 
    "Ahmed",
    "R1-212"
    )

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){

    obj[key]= value;

    return obj;
}

const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee,
    "Moha",
    "H23-45"
    );
function deleteFromEmployeeByKey(obj,key){

    let deletedKey = {...employee3};
    delete deletedKey.name;
    return deletedKey;
}
function destructivelyDeleteFromEmployeeByKey(obj,key){
    
    delete obj[key];

    return obj;    
}
const deletedOriginalEl = destructivelyDeleteFromEmployeeByKey(employee,"streetAddress")

console.log(deletedOriginalEl);
console.log(employee);
