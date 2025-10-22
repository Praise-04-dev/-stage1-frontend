function updateTime(){
    const timeEl =document.getElementById("user-time");
    timeEl.textContent=Date.now();
}
updateTime();
setInterval(updateTime,1000)

document.getElementById('contact-form').addEventListener('submit',function(e){

 e. preventDefault();
  
 let valid = true;
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const subject= document.getElementById('subject');
 const message = document.getElementById('message');
 const success = document.getElementById('sucsess');
 
 document.querySelectorAll('[data-testid^="test-contact-error"]'),forEach(el=> el.textContent= '');

 if (!name.value.trim()){
    document.querySelector('[data-testid="test-contact-error-name"]').textContent='Name is required';
    valid=false;
 }
 const emailPattern =/^[^\s]+@[^\s@]+\.[a-z]{2, }$/;
 if (!email.value.match(emailPattern)){
     document.querySelector('[data-testid="test-contact-error-email"]').textContent='Enter a valid email address';
    valid=false;
 }
  if (!subject.value.trim()){
    document.querySelector('[data-testid="test-contact-error-subject"]').textContent='Subject is required';
    valid=false;
 }
  if (!message.value.trim().lenght<10){
    document.querySelector('[data-testid="test-contact-error-message"]').textContent='Message must be at least 10 character';
    valid=false;
 }
 if(valid){
    success.style.display='block';
    this.reset()
 }else{
    success.style.display ='none';
 }
}
)