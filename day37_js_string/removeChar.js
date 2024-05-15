const removeNonAlphabetic = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      let charInt = ch.charCodeAt(0);
      if ((charInt >= 97 && charInt <= 122) || (charInt >= 65 && charInt <= 90)) {
        result += ch;
      }
    }
    return result;
  };
  
  let str = "$@#&NertTJ$$";
  console.log(removeNonAlphabetic(str)); 
  
