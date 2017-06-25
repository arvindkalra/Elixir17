/**
 * Created by arvind on 25/6/17.
 */

var bar = "this is global..."

var x = {
    "foo":foo,
    "bar":"this is inside x...."
}

function foo() {
    console.log(this.bar);
}

foo();

// this type of binding is called implicit binding
// in this type the value of "this" is the just left of function called....
// in current case it is x.....
x.foo();