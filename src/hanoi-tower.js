module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let obj = {};
  turnsSpeed = turnsSpeed / 3600;
  let turns = 2**disksNumber - 1;
  let seconds = turns / turnsSpeed; 
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
}