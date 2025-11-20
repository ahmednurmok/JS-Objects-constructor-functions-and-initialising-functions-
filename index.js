// Object with Properties
var housekeeping1 = {
    name: 'tom',
    DOB: "12/02/1998",
    Ethnicity: "British"
    }
    
    document.housekeeping1;
    console.log(housekeeping1.DOB)
    

//Constructor function 
function HouseKeeping  (Name, DOB, Ethnicity) {
    this.Name = Name
    this.DOB = DOB
    this.Ethnicity = Ethnicity 
}
var housekeeping2 = HouseKeeping('Ahmednur', '1/01/1900', 'Somali' ) 
console.log(housekeeping2.DOB)

// Constructor function with prpoperty and method

function Housekeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning= function() {
        console.log{'cleaningInProgress'}
    }
}

var housekeeping3 = HouseKeeper('3', 'Ahmednur', ['bedroom', 'kitchen'] ) 
housekeeping3.clean();
// above will return the method as it is now saved in the constructor function.

