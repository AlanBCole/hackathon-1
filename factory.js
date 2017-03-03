angular.module("TriviaGalore")
.factory("TriviaCenter", TriviaCenter)

TriviaCenter.$inject=["$http"]; 

function TriviaCenter($http){
  
function getHistory(){
 return $http ({
   method:"GET",
   url:"https://www.opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple"
 })}

function getMath(){
return $http({
 method:"GET",
 url:"https://www.opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple"

})}


function getScience(){
 return $http({
 method:"GET",
 url: "https://www.opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple"
})
}  

  


return {

getHistory: getHistory,
getMath: getMath,
getScience: getScience,
getAnswers : [],
}
}