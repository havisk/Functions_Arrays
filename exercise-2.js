// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1,num2)
{
   
	if (num1 > num2)
	{
		return num1;
	}
	else if (num2 > num1)
	{
		return num2;
	}
	else
	{
		return "Try again!!!";
	}

};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3)
{
	if (num1 > num2 && num1 > num3)
	{
		return num1;
	}
	else if (num2 > num1 && num2 > num3)
	{
		return num2;
	}
	else if (num3 > num1 && num3 > num2)
	{
		return num3;
	}
	else
	{
		return "What are you doing";
	}
    
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(value)
{
	
		 if (value === "a" ||
	      value === "e" ||
	      value === "i" ||
	      value === "o" ||
	      value === "u")


			{
				x = true;
			} 
			else 
			{
				x = false;
			}
			
				return x;
  
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase)
{
  var s = phrase.split("");
  var x = ""

  s.forEach(function(value)
  {
  	if (value === "a" ||
	    value === "e" ||
	    value === "i" ||
	    value === "o" ||
	    value === "u")
  	{
  		x = (x + (value));

  	}
  	else
  	{
  		x =  (x + (value + "o" + value));
  	}

  });

  return x;

 	
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase)
{
    
   return phrase.split("").reverse().join("");

}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words)
{
   
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i)
{

words =  ["castle", "longway", "numark", "a", "bo"];
i=300;

words.filter(function(word){

	return word.length > i.length;
});   

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}