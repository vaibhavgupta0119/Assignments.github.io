function anagram(Str1){
    var str2=Str1.toLowerCase();
    var array=[];
   for(var i=0;i<str2.length;i++)
   {
    array[i] =str2.charAt(i);
}

    var temp;
    //Sorting array 
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1;j < array.length; j++){
    
        if(array[i] > array[j]){
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }

    //This returns the string after sorting it.
    var txt ="";
    for(var i=0;i<array.length;i++){
        txt += array[i];
    }
    return txt;
  }
 
  var Str1= anagram("School master");
  var Str2= anagram("The classroom");

 var length_Str1=Str1.length;
  var length_Str2=Str2.length;
  //Comparing the length of Sorted Strings 
  if(length_Str1==length_Str2)
  {
     
      if(Str1==Str2)
      {
          console.log("True");
      }
    
      else {
          console.log("False");
      }
    
  }
  else 
  {
      console.log("Strings are of different length");
  }