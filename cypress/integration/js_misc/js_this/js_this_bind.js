var lang="Java";  
  
function lang_name(call)  
{  
  
    call();  
};  
  
var obj={  
    
  lang:"JavaScript",  
  language:function()  
  {  
    console.logln(this.lang+ " is a popular programming language.");  
  }  
};  
lang_name(obj.language);  
lang_name(obj.language.bind(obj));  