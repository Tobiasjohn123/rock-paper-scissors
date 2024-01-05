 const btn = document.querySelectorAll(".btns")
 const playerscore = document.querySelector("#user-score")
 const computerscore = document.querySelector("#computer-score")
 const result = document.querySelector("#result")
 const test = document.querySelector(".bb")
  


 let player = 0
let computer = 0
 
 
 btn.forEach((button)=>{
    button.addEventListener("click", function(e){
        e.preventDefault()
        const playerselection = (e.target,button.id)
        const computerselection = ( playround() )
        console.log(playerselection)
        console.log(computerselection);
 
 //result for the game
if(playerselection === computerselection)
{
  
   const showresult = "its a tie"
    console.log( showresult);
    result.innerHTML = showresult
    
}
else if(playerselection === "rock" && computerselection === "scissors" )
{ 
    player++
   playerscore.innerHTML = player
 const showresult = 'you win'+ ' '+ playerselection + ' '+"beats" + ' '+computerselection
 console.log( showresult);
 result.innerHTML = showresult
}
else if(playerselection === "paper" && computerselection === "rock")
{
    player++
    playerscore.innerHTML = player
 const showresult = 'you win'+ ' '+ playerselection + ' '+"beats" + ' '+computerselection
 console.log( showresult);
 result.innerHTML = showresult
}
else if(playerselection === "scissors" && computerselection === "paper" )
{
    player++
   playerscore.innerHTML = player
  const showresult = 'you win'+ ' '+ playerselection + ' '+"beats" + ' '+computerselection
 console.log( showresult);
 result.innerHTML = showresult
}else
{
    computer++
    computerscore.innerHTML = computer
   const showresult = "you loose badly" + " " +computerselection +" "+ "beats" +" " + playerselection
  console.log("you loose badly");
  result.innerHTML = showresult
}
     })  
 })

 
 function playround()
 {
    const choose = ["rock", "paper", "scissors"]
    const play = Math.floor(Math.random()*choose.length)
    return  choose[play]

   
 }


 
 
   
