class Player {
constructor(){

}
getplayercount(){
var playercountreference = database.ref("playercount")
playercountreference.on("value",(data) => {
playercount = data.val()

})
}
updateplayercount(count){
databse.ref("/").update({playercount : count})

}

}
