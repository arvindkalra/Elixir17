/**
 * Created by arvind on 25/6/17.
 */

function hello() {
    console.log(this.bar);
}

var obj1 = {
    bar : "bar obj 1"
}

var obj2 = {
    foo : hello,
    bar : "bar obj 2"
}

hello.call(obj1);
hello.call(obj2);