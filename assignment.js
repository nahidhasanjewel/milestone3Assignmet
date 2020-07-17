//[prob1]
function feetToMile(value){
  
    if (value >= 0)
    {
        return (value*0.00018939 +" "+"mile");
    }
    else{
        return ("negative value not allowed");
    }
    
}
 console.log(feetToMile(7));


//[prob2]
    var unitchair = 1
    var unittable = 3
    var unitbed = 5

function woodCalculator(chair,table,bed){

  return (chair*unitchair)+(table*unittable)+(bed*unitbed);

}

console.log(woodCalculator(2,3,5)+" "+"CFT");






 //prob3

function brickCalculator(floor) {
  
    if (floor<= 10) {

        var amount = floor * 15000;

    }

    else if ( floor <= 20) {

        var amount = (floor - 10) * 12000 + 15000 ;
    
        } 

    else if (floor > 20) {

       var amount = (floor - 20) * 1000 + 27000;
    
     }
     return amount ;

}

console.log(brickCalculator(17));






//prob4
function tinyFriend(arr){
    var lgth = arr[0].length;

    for(var i=0; i < arr.length; i++){
        if(arr[i].length < lgth){
            var lgth = arr[i].length;
            small = arr[i];
        }      
    }
   return small;
}
console.log(tinyFriend(['jamal', 'jui', 'josep','abdullah','jo']));





















