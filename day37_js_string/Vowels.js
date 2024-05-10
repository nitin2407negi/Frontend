const vowels=(str)=>{
    let vowelCount=0;
    let constCount=0;
    let vowel=[];
    let consonant=[];
    let str1=str.toLowerCase();

    for(let i=0;i<=str1.length;i++)
        {
          let char=str1.charAt(i);
          if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
             vowelCount++;
             vowel.push(str.charAt(i));
          }
          else{
            constCount++;
            consonant.push(str.charAt(i));
          }
        }
        console.log("total volwel count=",vowelCount);
        console.log(vowel);
        console.log("total consonent count=",constCount);
        console.log(consonant);
}
const str='EdUcation'
vowels(str);