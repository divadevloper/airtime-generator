let ree = document.getElementById('gen')
let network = document.getElementById('network')
let amounts = document.getElementById('amount')
let inp = document.getElementById('inpu')
let table =  document.getElementById("tableone")
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
            airtime = Math.floor(Math.random() * 10 )
            ree.innerHTML += airtime
        }

        console.log(ree.innerHTML);
        let date = new Date()
        let pin = {
            pin: ree.innerHTML,
            network: network.value,
            Amount: amounts.value,
            date: `${date.toLocaleString()}`    
        }
        console.log(pin);
        allPin.push(pin);
        console.log(allPin);

        ree.innerHTML +=
            `<button title="copied" id ="btnss" onclick ="copyp()"> <i class="fa-regular fa-clipboard"></i></button>`



    }
    table.innerHTML = ""
    for (let index = 0; index < allPin.length; index++) {
        const element = allPin[index];
        console.log(element);
      table.innerHTML += `
        <tr>
        <td>${element.network}</td>
        <td>${element.Amount}</td>
        <td>${element.pin}</td>
        <td>${element.date}</td>
        <td>${'<button title="copied" id ="btnss" oncgitlick ="copyp()"> <i class="fa-regular fa-clipboard"></i></button>'}</td>
        </tr>
        `
    }

}

function load() {
    if (inp.value == '') {
        alert('Fill Input')
    }
    
    else if (inp.value.startsWith("*311*") && inp.value.includes(airtime) && inp.value.endsWith("#")) {
        alert(` you have successfully recharge ${network.value} N${amounts.value} Airtime`)
    }
    else {
        alert("Incorret pin")
    }

    console.log(network.value);
    console.log(amounts.value);
}
function copyp() {
    console.log(ree.innerText);
    navigator.clipboard.writeText(ree.innerText);
}