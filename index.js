//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class  CrewCandidate{
  constructor(name,mass,scores){
    this.name=name;
    this.mass=mass;
    this.scores=scores;
  }
  addScore(sco){
    this.scores.push(sco);
    return;
  }
  average(){
    let sum=0
    for(let i=0;i<this.scores.length;i++){
       sum +=this.scores[i];
    }
    let avg= Math.round(sum/this.scores.length*10)/10;
    return avg;
  }
  status(){
    let results= "";
    if(this.average()>=90){
      results = "Accepted";
    }else if(this.average()>=80 && this.average()<=89 ){
      results ="Reserve";
    }else if(this.average()>=70 && this.average()<=79){
      results = 'Probationary';
    }else{
      results ='Rejected';
    }
    return `${this.name} earned an average test score of ${this.average()}% and has a status of ${results}.`
  }
}
let bear =new CrewCandidate('Bubba Bear',135,[88,85,90])
let maltes =new CrewCandidate('Merry Maltese',1.5,[93,88,97])
let gator =new CrewCandidate('Glad Gator',225,[75,78,62])

// //bear.addScore(83)
// while(glad.average()<=80){
//   let test = 0;
//   glad.addScore(60)
//   if(glad.average()<=90){
//     test +=1; 
//   }else{
//     test+=1
//   }
//   return test;
// }
// // console.log(bear)
// // console.log(maltes)
console.log(gator.status())
let count = 0;
while(!(gator.average()>=80 && gator.average()<=89)){
gator.addScore(90);
console.log(gator.average());
count++;
}
console.log(gator.status());
console.log(`Glad gator took ${count} test to Reserve status`);
let i=0;
while(!(gator.average()>=90)){
  gator.addScore(95);
  console.log(gator.average());
i++;
}
console.log(gator.status());
console.log(`Glad gator took ${i} test to Accepted status`);
// //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// console.log(bear.status())
// console.log(maltes.status())
//console.log(glad.status())

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.