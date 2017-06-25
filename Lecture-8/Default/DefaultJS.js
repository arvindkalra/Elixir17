/**
 * Created by arvind on 25/6/17.
 */
var foo = "bar";

// if there was no foo then in the first pass when the compiler goes to console.log it does not
// get foo so it makes its own foo in global scope giving it the value undefined hence we get foo
// as the answer
function global() {
    console.log(this.foo);
    console.log("I am Global");
}

// this is called default calling
// this will giev two answers either undefined or reference error..
global();


// function parent() {
//     console.log(this);
//     foo = "check";
//     function child1() {
//         console.log("child1");
//         console.log(this.foo);
//     }
//     function child2() {
//         console.log("child2")
//         console.log(this.foo);
//     }
//     child1();
//     child2();
// }

parent();