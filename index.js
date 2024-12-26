const email = document.getElementById('email')
const submit = document.getElementById('submit')
const errorMessage = document.getElementById('errorMessage')


submit.addEventListener('click', () =>{
    console.log('hello')
    if(email.value.trim() === ''){
        errorMessage.innerText = 'Please provide a valid email';
        email.style.border = '2px solid var(--Soft-Red)'
    } 
});