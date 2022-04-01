function numberOfVowel (str){
  let vowelCount = 0
  let vowels = ["A", "E", "I", "O", "U",]
  for(let char of str)
  {
    if(vowels.includes(char)){
   vowelCount ++
  }
     }
 
  console.log(`Number of vowel characters present in ${str} = ${vowelCount}`)
console.log(`\n`)
    console.log(`Number of characters present in ${str} = ${str.length}`)
  
}
numberOfVowel("WELCOME TO THE MONTH OF APRIL FAM")
