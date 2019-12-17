

const whichSchool  = function (age) {
  const school = ["Elementary School" , 'Secondary School' , 'Lighthouse Labs'];

  if(age < 13){
    console.log(school[0]);
  }

  else if(age >= 13 && age <= 18){
    console.log(school[1]);
  }
  else{
    console.log(school[2]);
  }
  return 1;
}


console.log(whichSchool(12));