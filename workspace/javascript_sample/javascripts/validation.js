const email_confirm = document.getElementById('email_confirm');
function emailValidation(){
  const parentElement = document.getElementsByTagName("tbody")[0];
  const target = document.getElementById('ecom');
  const element = document.createElement('span');
  const block = document.getElementById('red');
  email_confirm.oninput=function(){
    if (form.email.value !== form.email_confirm.value){
      parentElement.insertBefore(element,target)
      element.innerText="El email no coincide"
      email_confirm.setAttribute("style", "background-color:rgba(230,169,171,.5)");
    }else{
      parentElement.removeChild(element)
      email_confirm.setAttribute("style", "background-color:white");
    }
  } 
}
window.onload=emailValidation

