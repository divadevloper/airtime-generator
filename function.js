let ree = document.getElementById('gen')
let network = document.getElementById('network')
let amounts = document.getElementById('amount')
let inp = document.getElementById('inpu')
let table = document.getElementById("tableone")
let airtime;
allPin = []


function free() {
    ree.innerHTML = ""
    if (network.value == "") {
        alert("Select a Service provider")
    }

    else if (amounts.value == "") {
        alert("Select an Amount")

    }
    else {
        for (let i = 1; i <= 16; i++) {
            airtime = Math.floor(Math.random() * 10)
            ree.innerHTML += airtime
        }

        console.log(ree.innerHTML);
        let date = new Date()
        let pin = {
            pin: ree.innerHTML,
            network: network.value,
            isused: false,
            Amount: amounts.value,
            date: `${date.toLocaleString()}`
        }
        console.log(pin);
        allPin.push(pin);
        console.log(allPin);
       
    }
    Dispin()
    ree.innerHTML +=
        `<button title="copied" id ="btnss" onclick ="copyp()"> <i class="fa-regular fa-clipboard"></i></button>`

}

function Dispin() {
    table.innerHTML = ""
    for (let index = 0; index < allPin.length; index++) {
        const element = allPin[index];
        console.log(element);
        table.innerHTML += `
        <tr>
        <td>${element.network}</td>
        <td>${element.Amount}</td>
        <td id="ccpinn${index}"> 
        ${element.pin}
        <button title="copied" id ="btnss" onclick ="copyp(${index})"> <i class="fa-regular fa-clipboard"></i></button>
        </td>
        <td>${element.isused ? "Been used" : "Not Used"}</td>
        <td>${element.date}</td>
        </tr>
        `
    }
}

Dispin()

function load() {
    let ppin = inp.value.slice(5,21);
    let loadingpin = allPin.find((el) => el.pin === ppin) ;

    if (inp.value == '') {
        alert('Fill Input')
    }else if (loadingpin == undefined){
       alert('invalid pin')
    }else if (loadingpin.isused == true){
      alert("This card has already been used by you")
    }else if (inp.value.startsWith("*311*") && inp.value.includes(loadingpin.pin) && inp.value.endsWith("#")) {
        loadingpin.isused = true
        alert(` you have successfully recharge ${network.value} N${amounts.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`)
        Dispin()
    }
    else {
        alert("Dear customer, this pin is incorrect and your line will be DISABlED from the service after 5 incorrect attempts ")
    }

    console.log(network.value);
    console.log(amounts.value);
}
function copyp(index) {
    let ccpinn = document.getElementById(`ccpinn${index}`)
    navigator.clipboard.writeText(ree.innerText);
}