document.getElementById('login-btn').addEventListener('click', function(even){
    even.preventDefault()
   const numbers = document.getElementById('number-input').value
   const number =parseFloat(numbers)
   const passwords = document.getElementById('password-input').value
   const password = parseFloat(passwords)
   
   if(password === 123){

    window.location.href ="home.html"
   }
   else{
    alert('Invalid Input')
   }
    
})