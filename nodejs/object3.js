var obj1 = { 
    name : "rohit",
    age : 25
};

var obj2 = {
    name : "amar",
    age : 30,
    data : obj1
};


console.log(obj2.data.name);
