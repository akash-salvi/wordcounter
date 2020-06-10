var Count; 
var input = document.querySelectorAll('textarea')[0],
  characterCount = document.querySelector('#characterCount'),
  wordCount = document.querySelector('#wordCount'),
  paragraphCount = document.querySelector('#paragraphCount'),
  wordlimit = document.querySelector('#wordlimit');
  
 
function myFunction() {
  Count= document.getElementById("limit").value;;
  document.getElementById("wordlimit").innerHTML = Count;
  document.getElementById("text").maxLength = Count	;
}
input.addEventListener('keyup', function() {
  
  console.clear();  
  
  characterCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  var wordl;
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }
  
  if (words) {
    var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
  
  if (words) {
	  wordl=Count-(input.value.length);
      wordlimit.innerHTML = wordl;    
  }
  if (input.value.length==Count) {	
	alert("Reached the Character Limit!!!");
  }

});


