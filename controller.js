angular.module("TriviaGalore")
.controller("TriviaController", TriviaController)

TriviaController.$inject =["TriviaCenter"]; 

function TriviaController(TriviaCenter){
var main =this; 
  
  
//   TriviaCenter.getHistory()
//  .then(function(responseFromServer){
//    console.log("Response!", responseFromServer); 
  
    

//   main.historyquestion = responseFromServer.data.results; 
    
//    for (var i = 0; i < responseFromServer.data.results.length; i++){
      
//     console.log(responseFromServer.data.results[i].correct_answer);
    
//     var incor = responseFromServer.data.results[i].incorrect_answers;
//     var cor = responseFromServer.data.results[i].correct_answer;
    
//     console.log (incor + cor)
    
//     var choices = _.shuffle(incor);
//     choices.splice(Math.floor(Math.random() * 4),0,cor)
  
//     responseFromServer.data.results[i].Choices = choices
    
//     var newChoices = responseFromServer.data.results[i].choices
//     console.log(newChoices);
//    }
    
    
    
    
//   })
  TriviaCenter.getMath()
 .then(function(responseFromServer){
   console.log("Response!", responseFromServer); 


  main.mathquestion = responseFromServer.data.results;
    for (var i = 0; i < responseFromServer.data.results.length; i++){
      
    console.log(responseFromServer.data.results[i].correct_answer);
    
    var incor = responseFromServer.data.results[i].incorrect_answers;
    var cor = responseFromServer.data.results[i].correct_answer;
    
    console.log (incor + cor)
    
    var choices = _.shuffle(incor);
    choices.splice(Math.floor(Math.random() * 4),0,cor)
  
    responseFromServer.data.results[i].newChoices = choices
    
    var newChoices = responseFromServer.data.results[i].choices
    console.log(newChoices);
     

  }
  })
  
  
  TriviaCenter.getScience()
 .then(function(responseFromServer){
   console.log("Response!", responseFromServer); 


  main.sciencequestion = responseFromServer.data.results;
    for (var i = 0; i < responseFromServer.data.results.length; i++){
      
    console.log(responseFromServer.data.results[i].correct_answer);
    
    var incor = responseFromServer.data.results[i].incorrect_answers;
    var cor = responseFromServer.data.results[i].correct_answer;
    
    console.log (incor + cor)
    
    var choices = _.shuffle(incor);
    choices.splice(Math.floor(Math.random() * 4),0,cor)
  
    responseFromServer.data.results[i].newChoices = choices
    
    
    
 
  }
  })
  
  TriviaCenter.getHistory()
 .then(function(responseFromServer){
   console.log("Response!", responseFromServer); 
  
  main.historyquestion = responseFromServer.data.results;
    for (var i = 0; i < responseFromServer.data.results.length; i++){
      
    console.log(responseFromServer.data.results[i].correct_answer);
    
    var incor = responseFromServer.data.results[i].incorrect_answers;
    var cor = responseFromServer.data.results[i].correct_answer;
    
    console.log (incor + cor)
    
    var choices = _.shuffle(incor);
    choices.splice(Math.floor(Math.random() * 4),0,cor)
  
    responseFromServer.data.results[i].newChoices = choices
    
    
    
 
  }
  })
  
  main.answer = function(answers, questions){
    if (answers == questions.correct_answer){
      console.log ("BOOOOM");
    } else {
      console.log ("Try Again")
    }
    
  }
  
}