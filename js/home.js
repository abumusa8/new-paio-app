//cash in from start here
document.getElementById('addmoney-btn').addEventListener('click', function(even){
even.preventDefault()
const numberinput =document.getElementById('number-input').value
const number = parseFloat(numberinput)
const passwords = document.getElementById('password-input').value
const password = parseFloat(passwords)
const money =document.getElementById('moneys').innerText
const moneyss=parseFloat(money)
if(password === 123){

const result =moneyss+number
document.getElementById('moneys').innerText=result
//update history
 const div =document.createElement('div')
 div.classList.add('bg-yellow-300')
 div.innerHTML =`Add Money: ${result}`
 document.getElementById('trangaction-container').appendChild(div)
}
else{
    alert('Invalid Password')
}

})
// cash in from end here
//cash out from start here
document.getElementById('cashout-btn').addEventListener('click', function(even){
    even.preventDefault()
    const numbercashout =document.getElementById('number-cashout').value
    const cashout = parseFloat(numbercashout)
    const passwords = document.getElementById('password').value
    const password = parseFloat(passwords)
    const money =document.getElementById('moneys').innerText
    const moneyss=parseFloat(money)
    if(password === 123){
    
        const updateblance =moneyss - cashout
        document.getElementById('moneys').innerText =updateblance
        //add to trangaction history
        const p =document.createElement('p')
        p.innerText =`cash out :${updateblance}`
        document.getElementById('trangaction-container').appendChild(p)
    }
    else{
        alert('Invalid Password')
    }
    
    })
//cash out from end here

//button related function
document.getElementById('cashoutBtn').addEventListener('click', function(even){
    even.preventDefault()
    hidevaluebyid('cashout-from')

})
document.getElementById('addmoney').addEventListener('click', function(even){
    even.preventDefault()
    hidevaluebyid('addmoney-from')

})
document.getElementById('trangaction').addEventListener('click', function(even){
    even.preventDefault()
    hidevaluebyid('my-history')
    hidevaluebyid('trangaction-container')

})