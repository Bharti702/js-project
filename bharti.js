import readline from `readline-sync`
``

console.log("---recipe menu---");
let mainmenu=["1:Add a Recipe",
    "2:View All Recipes", 
    "3:Edit a Recipe",
    "4:Delete Recipe", 
    "5:calculate Total Coooking Time.",
    "6:Exit",
    ];
console.log(mainmenu);

// ---------

// process.stdout.write('enter recipe name :-');
// process.stdin.on('data',(data)=>{
//     const name =data.toString().trim();
//     console.log(' ');
//     process.exit();
// });

//add recipe

let addarecipe = " recipe name ,ingridents,stpes"
let b= readline.question()
if(addarecipe==addarecipe){
    console.log("recipe name - fried rice  ");
    console.log("ingridents - soy sauce, and shredded egg, spices ");
    console.log("timing-: 20-25 min");
}
else{
    console.log(""); 
}
       // ---------

// process.stdout.write('enter recipe name :-');
// process.stdin.on('data',(data)=>{
//     const name =data.toString().trim();
//     console.log(' ');

let ViewAllRecipe 
if(ViewAllRecipe==ViewAllRecipe){
    console.log("Recipe list:-");
    let viewlist=["1.fried rice",
        "2.pizza",
        "3.momos",]
    console.log(viewlist);
}
else{
    console.log("");
}

//edit
console.log("edit list ");
let edit=["1.fried rice",
    "2.pizza",
    "3.momos",]
let editlist =""
let editnew = edit.concat(editlist)
console.log(editnew);

//del
console.log("delete the item in list ");
let deleteRecipe 
let de=["1.fried rice",
    "2.pizza",
    "3.momos",]
let del=de.pop()
console.log(del);
