const count = document.querySelector('.count')
const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const info = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const noEmpty = () => { 
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Uzupełnij wszystkie pola!'
        info.style.display = 'none';
    }else{
        error.textContent = ''
        countBill();
    }
 }

const countBill = () => { 
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);


    const sum = (newPrice + newPrice * newTip) / newPeople;
    info.style.display = 'block';
    
    cost.textContent = sum.toFixed(2)

}


count.addEventListener('click',noEmpty)