module.exports = function createDreamTeam(arr) {
	let strName = '';
	if(Array.isArray(arr)){
		arr = arr.map(function(item){
			if(typeof item === "string"){
        return item.trim().toUpperCase();
			}
		});
		arr.sort();
    for (let i = 0; i < arr.length; i++) {
    	if(typeof arr[i] === "string"){
        strName += arr[i].substr(0, 1);
    	}
    }
	}
	return strName;
};

