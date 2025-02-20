function firstWord(s) {
  // your code here
	let result = '';
   for(let char of s){
	   if(char === ' '){
		  break; 
	   }
	   else{
		   result = result+char
	   }
   }
	console.log(result);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
