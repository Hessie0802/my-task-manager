//"Welcome to your task manager, Press: //Function Summary Tasks
//1. to see all your tasks // Function SeeTasks
//2. to add a task // Function AddTasks
//3. to delete a task // Function DeleteTasks
//4. to mark a task as done // Function MarkTasksDone
//5. to Exit the task manager" // Function ExitTaskManager


// Function Summary Tasks

const prompt = require('prompt-sync')();
 

const menu = () => {
    console.log("Welcome to your task manager, Please Press:");
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to Exit the task manager");

    const cijfer = prompt('What is your choice?'); //input waarde toevoegen
    
    let array = ["Grass Mowing" , "Shopping", "Study"] // lijst taken aan maken
    var Todo ="To Do"
    var Completed = "Completed"
    let ToCo =[]
    if (cijfer == 1){
        
        array.forEach(item => {
            console.log("-" , item)
        });
    }
    if (cijfer == 2){
        const taak = prompt('What do you want to add?');
        array.push(taak) //push is iets toevoegen aan array 

        array.forEach(element => {
            console.log("-" , element)
        });
        
    }


    if (cijfer == 3){
        const taak = prompt('What do you want to delete?');

        for( var i = 0; i < array.length; i++){ 
    
            if ( array[i] === taak) { 
        
                array.splice(i, 1); // iets delete aan een array
            }
        
        }

        array.forEach(element => {
            console.log("-" , element)
        });
    }

    if (cijfer == 4){
        const taak = prompt('What do you want to mark as done?');

        for( var i = 0; i < array.length; i++){ 
    
            if ( array[i] === taak) { 
        
                var mario = taak + "-" + Completed  //Mark as done
                array[i] = mario
            }
            else {
                var mario = array[i] + "-" + Todo  ///rest mark als to do
                array[i] = mario
            }
        
        }

        array.forEach(element => {
            console.log("-" , element)  //
        });
    }

    if (cijfer == 5)
    {
        console.log ("You quit the task manager");
    };


};

menu();//oproepen manager.js

