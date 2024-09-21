function hidevaluebyid(id){
    document.getElementById('cashout-from').classList.add('hidden')
    document.getElementById('addmoney-from').classList.add('hidden')
    document.getElementById('my-history').classList.add('hidden')
    document.getElementById('trangaction-container').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}