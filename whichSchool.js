

const whichSchool  = function (age) {
  const school = ["Elementary School" , 'Secondary School' , 'Lighthouse Labs'];
  let response = 2;

  if(age < 13){
    response = 0;
  }

  else if(age >= 13 && age <= 18){
    response = 1;
  }
  else{
    return school[response];
    break;
  }
  return school[response];
}


console.log(whichSchool(12));