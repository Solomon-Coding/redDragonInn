// First players enter there name. this in turn creates a player object.
// Players state weather they want to create or join a game.
// if player selects 
// Once in lobby, players can view charicters and select who they want to play.
// When all players have selected a character, the room leader can start the game.
//      characters will be recorded in each players object.
// When the room leader startes the game, then the screen changes to the game board,
//      and initilazation seuence is run. card decks are scrambled, a player is randomly
//      selected to start from playerlist, players are shuffled, fortitude, alcohol content, gold are set. 

// Variables
var innGold = 100;
var playerList = [];
var gamePlayerList = [];

// Objects
var roomParticipant = {
    music:0,
}
var roomLeader = {
    participants:3,
    shipEvents:0,
    dungeonEvents:0,
    music:0,
}


console.log(roomLeader.participants)
for (var i=0;i<roomLeader.participants;i++){
    var player = {
        id:0,
        gameName:"",
        gameChar:null,
        // List of attributes that can be affected over the game
        fortitude:20,
        alcoholContent:0,
        gold:10,
        role:"RoomParticipant",
        actions: roomParticipant,
    }
    playerList[i] = player;
    playerList[i].id=i;
    console.log(player.id)
}

initialization();
playerList[1].role="RoomLeader";
playerList[1].actions=roomLeader;

function initialization(){
    for (var i=0;i<playerList.length;i++){
        playerList[i].gold=10;
        playerList[i].alcoholContent=0;
        playerList[i].fortitude=10;
        // playerList[i].scarabs=0;
        // playerList[i].tears=10;
        
    }

    innGold=100;
    gamePlayerList = shuffle(playerList);
    console.log(gamePlayerList)
}

function shuffle(array){
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}