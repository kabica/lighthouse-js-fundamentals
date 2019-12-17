



  var modThree;
  var modFour;
  for(let i = 100; i <= 200; i++){
    modThree = (i % 3);
    modFour = (i % 4);

    if(modThree === 0 && modFour === 0){
      console.log('LoopyLighthouse');
      continue;
    }
    else if(modThree === 0){
      console.log("Loopy");
    }
    else if(modFour === 0){
      console.log("Lighthouse");
    }
    else{
      console.log(i);
    }
  
  }




