const howManyHundreds = function(number){
  let mod = number % 100;
  let result = number - mod;
  return result / 100;

}