const robot=[
    {
        id:1,
        name: 'Bret',
        picture : 'img/cat.jpg'
    },
    {
        id:2,
        name: 'Yann',
        picture : 'img/water.jpg'
    },
    {
        id:3,
        name: 'Damien',
        picture :'img/water.jpg'
    },
    {
        id:3,
        name: 'Dodo',
        picture :'img/cat.jpg'
    },
    {
        id:4,
        name: 'dolittle',
        picture : 'img/water.jpg'
    },
    {
        id:4,
        name: 'William',
        picture : 'img/water.jpg'
    },
    {
        id:5,
        name: 'Zebra',
        picture : 'img/cat.jpg'
    },
    {
        id:6,
        name: 'Amelie',
        picture : 'img/cat.jpg'
    },
    {
        id:7,
        name: 'Jhon',
        picture : 'img/cat.jpg'
        
    },
    {
        id:8,
        name: 'Arthur',
        picture : 'img/water.jpg'
        
    },
    {
        id:9,
        name: 'Jamy',
        picture : 'img/water.jpg'
        
    },
    {
        id:10,
        name: 'Juju',
        picture : 'img/water.jpg'
        
    },
    {
        id:11,
        name: 'spiderman',
        picture : 'img/water.jpg'
        
    },
    {
        id:12,
        name: 'spiderpig',
        picture : 'img/water.jpg'
        
    },
    {
        id:13,
        name: 'spiderpig',
        picture : 'img/water.jpg'
        
    },
    {
        id:14,
        name: 'Zebre',
        picture : 'img/water.jpg'
        
    },

];

//Create a const contain all object

//const {rentRobot
//console.log(robot())


// Create the robot in the HTML
function createRobotList(robotParameter){


    robotParameter.forEach(user => {   

        let newCardRobotId = document.createElement('div');
        newCardRobotId.setAttribute("class", "cardRobotClass");
    
        newCardRobotId.innerHTML = `
        <div >
        <img class="img" src=${user.picture}>
       
        <div id="theRobot">${user.id}  ${user.name}</div>
        </div>`
      
        cardRobotId.appendChild(newCardRobotId);
    });



}



// Put in alphabetic Order the list of the Robot 
function sortList(listOrder){

    const myRobotListOrder = listOrder.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();  
     
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }

        return 0;


    }); 
    // Put in the alphabetic order all element 
    
    //console.log("c'est la liste"+myRobotListOrder);
    return myRobotListOrder;
    
 
   // createRobotList(listOrder);
   // console.log(listOrder)
    
    
};

const newNewArray = sortList(robot);
console.log("aa");
console.log(newNewArray);
createRobotList(robot);





mySearch.addEventListener("input",myDataFiltered)

function myDataFiltered(e){

    cardRobotId.innerHTML = '';
    
    const mySearchOfRobot = e.target.value.toLowerCase();

    const newTableRobotResult = newNewArray.filter(elOfMyObject => elOfMyObject.name.toLowerCase().includes(mySearchOfRobot));
    
    
    createRobotList(newTableRobotResult);
}









// Create the function between input HTML and DSybamic Form
/*
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input",whatEnter);
*/

/* Was creating the function to take text from the input
function whatEnter(e){
    log.textContent = e.target.value.toLowerCase();
    
    const newSearch = e.target.value.toLowerCase();
    

    // Show specific Data with the specific name
    /*
    let enteredValue = 'Amelie';
    let enteredValue2 = 'Jhon';
    const newRobot = robot.find(newRobot => newRobot.name === enteredValue);
    const newRobot2 = robot.find(newRobot2 => newRobot2.name === enteredValue2);
    
    //let x = newRobot.toLowerCase();


    
    console.log(newRobot);
    console.log(newRobot2);
    console.log(newSearch);
    //console.log(x);
    //console.log();
    
    
    console.log(Object.values(robot));

    

    let theTheNewRobot = document.createElement('div');

    theTheNewRobot.innerHTML = `<div id="aa">${newRobot.name}</div> 
    <div id="aa">${newRobot2.name}</div>`;
    values.appendChild(theTheNewRobot);


    
    
}
*/
