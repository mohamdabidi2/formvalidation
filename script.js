

let ps = document.getElementById("ps");
let adr =document.getElementById("adr")
let email=document.getElementById("email")
let pass=document.getElementById("pass")
let com=document.getElementById("com")
let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
  e.preventDefault();
    Empty(ps,adr,com);
    VPassword(pass);
    VEmail(email);
    
  })
  function VPassword(pass)
  {
    if(pass.value.length<6) {
      alert("Error: Password must contain at least six characters!");
     pass.focus();
      return false;
    }
    charr =/[0-9]/;
    if(!charr.test(pass.value)) {
      alert("Error: password must contain at least one number!");
     pass.focus();
      return false;
    }
    charr =/[a-z]/;
    if(!charr.test(pass.value)) {
      alert("Error: password must contain at least one lowercase letter!");
      pass.focus();
      return false;
    }
    charr =/[A-Z]/;
    if(!charr.test(pass.value)) {
      alert("Error: PassWord must contain at least one uppercase letter!");
      pass.focus();
      return false;
    }
  }
  function Empty(ps,adr,com)
{
if(ps.value==""){
return alert(" name case was empty");}
if(adr.value==""){
return alert("Adress case was empty");}
if(com.value==""){
return alert("comment case was empty");
}
}

function VEmail(email) 
{
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("invalid email address!")
    return (false)
}
