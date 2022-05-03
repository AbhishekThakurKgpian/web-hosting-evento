



    



document.querySelector("#res").addEventListener('click',()=>{ var i=0;
    Array.from(document.querySelectorAll('input')).forEach((element)=>{
       i++;
        if(i+1<Array.from(document.querySelectorAll('input')).length){element.value=null;}
    })
})
document.querySelector("input[type='submit']").addEventListener('click',async ()=>{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confirmPassword').value;
    let checker=password.toString().localeCompare(confirmPassword);
    
    if(checker==0){
  await axios.post('/loginSignup/signup.html',{'name':name,'email':email,'password':password}).then(
	   fetch(window.location.href)).then(data=>{if(data.data.message){
           alert('user already exists');
       }
    else{
        alert('Signup successful,kindly login to your account now');
        window.location.assign((window.location.href).replace('signup','login'));
    }});
     
}
  else{
      alert('Password doesnot match with confrimPassword');
  }
})
  