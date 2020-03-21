const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const con = (0.693 / HALF_LIFE_PERIOD);

module.exports = function dateSample(string) {
	let a;
  if(typeof string === "string"){
  	if(MODERN_ACTIVITY / parseFloat(string) && (parseFloat(string) > 0 && parseFloat(string) <= 15)){
  		a = (MODERN_ACTIVITY / parseFloat(string));
      return Math.ceil(Math.log(a) / con);
  	}else{
  		return false;
  	}
  }else{
  	return false;
  }
};
