function OpeningCeremony(race100M){
    let data =  {red:0,blue:0,green:0,yellow:0};
    setTimeout(()=>{
        console.log("Let the games begin.");
    },1000)
    console.log("1")
    race100M(data, longJump);
    
  }

  function race100M(data, longJump){
 setTimeout(() => {
    var newData={...data}
    let randomNumber=Math.floor(Math.random() * (15 - 10 + 1)) + 10;
 }, 3000);
 console.log("2")
longJump(newData, highJump)
  }


  function longJump(data, highJump){
var newData={...data};
console.log("3")
highJump(newData, AwardCeremony)
  }


  function highJump(data,AwardCeremony){
    var newData={...data};
    console.log("4")
    AwardCeremony(newData)
  }
function AwardCeremony(data){
    console.log("5")
}
  OpeningCeremony(race100M)
//   OpeningCeremony() → Race100M() → LongJump() → HighJump() → AwardCeremony()