TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(x){
right(45);
forward(x);
right(90);
forward(x);
right(45);
}
function rectangle(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}


// Type your function call below
function house(x){
square(x);
triangle(x);
rectangle(x);
}
house(100);
stamp();
