/**
 * Created by arvind on 25/6/17.
 */

function person() {
    this.naam = "Ram";
    this.skul = "MCS";
}

var x = new person();
// this line performs 4 steps....
// 1st it makes a new object of type person and alloocates it some memory..
// 2nd it links this object with the person (the function that comes after new) with all its
//         variables and functions
// 3rd it sets this as the object
// 4th it returns the object.....

console.log(x);