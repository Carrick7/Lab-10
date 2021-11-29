function array(){
  var userInput=[];
  var arrayLength=userInput.length;
  var totalSum=0;
    for(i=0;i<5;i++){
      userInput[i]=prompt("Please Enter Your "+(i+1)+" Number for the Array")
    }
    for(var i=0;i<userInput.length;i++){
      totalSum += parseInt(userInput[i]);
    }
    console.log("The Total of Your Array is", totalSum);{
      document.getElementById("Total").innerHTML= totalSum;
    }
    var avg = totalSum/userInput.length;
    console.log("The Average of Your Array is", avg);{
      document.getElementById("Average").innerHTML= avg;
    }
}

