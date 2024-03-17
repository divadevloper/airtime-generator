let ree=document.getElementById('gen')
let network = document.getElementById('network')
let amounts = document.getElementById('amount')
let inp =document.getElementById('inpu')
let airtime ;

function free() {
    if (network .value =="" || amounts.value=="" ) {
        alert("Select an Amount and a Service provider")
    } else {
        airtime = Math.floor(Math.random()*100000000000000000)
        ree.innerHTML=airtime
    }
    
}

function load() {
    if (inp.value == '') {
        alert('Fill Input')
    } 
    else if (inp.value.startsWith("*311*") && inp.value .includes(airtime) && inp.value.endsWith("#")){
        alert(` you have successfully recharge ${network .value} ${amounts.value} airtime`)
    }
   
    else {
        alert("incorret pin")
    }    
    console.log(network .value);
    console.log(amounts.value);
}
