// First create a turn based system
// however, the system needs to know that there are differnt players which means there needs to 
// be a login/game name that can keep track of each player

var playerID_El = document.querySelector("#playerID")
     
var playerObject = {
    username:"",
    selected_character:"",
} 

const characterList = {
    
}

playerID_El.value
saveProjectsToStorage(playerName)


function readProjectsFromStorage() {
    var projects = localStorage.getItem('projects');
    if (projects) {
      projects = JSON.parse(projects);
    } else {
      projects = [];
    }
    return projects;
  }
  
  // Takes an array of projects and saves them in localStorage.
  function saveProjectsToStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }