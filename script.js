function validate()
{
   var uname=document.getElementById("inp1");
   var i=0;
   var pass=document.getElementById("inp2");
   var f=document.querySelectorAll("i");
   var f1=f[0];
   var f2=f[1];
   var f3=f[2];
   var f4=f[3];
   var s1=document.getElementById("s1");
   var s2=document.getElementById("s2");
   f1.style.visibility="hidden";
   f2.style.visibility="hidden";
   f3.style.visibility="hidden";
   f4.style.visibility="hidden";
   s1.style.visibility="hidden";
   s2.style.visibility="hidden";
   var val1=uname.value;
   var val2=pass.value;
   if(val1=="")
   {
      s1.innerHTML="username cannot be empty";
      f2.style.visibility="visible";
      s1.style.visibility="visible";
   }
   else if(val1.length<3)
   {
      s1.innerHTML="length should be atleast 3";
      f2.style.visibility="visible";
      s1.style.visibility="visible";
   }
   else if(val1.match(/^[a-zA-Z0-9-_]{3,13}$/))
   {
        f1.style.visibility="visible";
        i=i+1;
   }
   else
   {
        s1.innerHTML="username is not valid";
        f2.style.visibility="visible";
        s1.style.visibility="visible";
   }
   if(val2=="")
   {
      s2.innerHTML="password cannot be empty";
      f4.style.visibility="visible";
      s2.style.visibility="visible";
   }
   else if(val2.length<3)
   {
      s2.innerHTML="length should be atleast 3";
      f4.style.visibility="visible";
      s2.style.visibility="visible";
   }
   else if(val2.match(/^[a-zA-Z][a-zA-Z0-9]{2,10}[@]{1,1}[a-zA-Z0-9]{2,5}$/))
   {
        f3.style.visibility="visible";
        i=i+1;
   }
   else
   {
        s2.innerHTML="password is not valid";
        f4.style.visibility="visible";
        s2.style.visibility="visible";
   }
   if(i==2)
   {
      swal("Good job! "+val1, "You have login successfully!", "success");
   }
}
