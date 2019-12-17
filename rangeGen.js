const range = function(start, end, step){
  let result = [];

  if(start === undefined || end === undefined || step === undefined){
    return result;
  }
  if(start > end){
    return result;
  }
  if(step <= 0){
    return result;
  }

  result.push(start);

  let next = start;
  while(next != end){
    next += step;
    result.push(next);
  }
  return result;

}