function scrollToTicket() {
scroll('ticket-section')

}


function clickMouse(event) {
 
  const count2 = getIntValue('count-2')
  
  if(count2>=4){
    alert('You can only select up to 4 seats.');
    
    return; 
  }

  const press = event.target.innerText
  addClasslist(press)
  
  const count1 = getIntValue('count-1') - 1
  setTextValue('count-1', count1)

  
  setTextValue('count-2', count2+1)

  const count3 = getIntValue('count-3') + 550
  setTextValue('count-3', count3)

  const count4 = getIntValue('count-4') + 550
  setTextValue('count-4', count4)

  document.getElementById('sit-1').innerText = press

  if(count2==3){document.getElementById('apply').removeAttribute('disabled')} 
  


}



document.getElementById('phoneNumber').addEventListener('keyup', numberInput)

function numberInput(element) {
  const input = element.target.value
  const input2 = Number(input)
  const count2 = getIntValue('count-2')
 

  if (typeof (input2) == 'number'  && !isNaN(input2) && count2 > 0 && input.trim() !== '' ) {
    document.getElementById('nextBtn').removeAttribute('disabled')
  }

  else {
    document.getElementById('nextBtn').setAttribute('disabled', true);
  }
  return input

}


document.getElementById('nextBtn').addEventListener('click',success)

function success(){
  removeHidden('successScreen')
  addHidden('ticket-section')
  addHidden('offerSection')
  addHidden('header')
  addHidden('footer')
  document.getElementById('phoneNumber').value=''
  document.getElementById('count-2').innerText=0
  document.getElementById('count-3').innerText=0
  document.getElementById('count-4').innerText=0
  document.getElementById('apply').classList.remove('hidden')
  document.getElementById('coupon-code').classList.remove('hidden')
  document.getElementById('apply').setAttribute('disabled')

}

function againPurchase(){
  addHidden('successScreen')
  removeHidden('ticket-section')
  removeHidden('offerSection')
  removeHidden('header')
  removeHidden('footer')
  scroll('scroll2')

  
}

document.getElementById('coupon-code').addEventListener('keyup',couponField)
function couponField(element){
const input= element.target.value
if(input==='NEW15'){
  document.getElementById('apply').addEventListener('click',new15)
  function new15(){
   const newTotal1= getIntValue('count-4')*0.85
   setTextValue('count-4',newTotal1)
  
   addHidden('apply')
   addHidden('coupon-code')
  }

}
if( input==='Couple20'){
  document.getElementById('apply').addEventListener('click',new20)
  
  function new20(){
    const newTotal2= getIntValue('count-4')*0.80
   setTextValue('count-4',newTotal2)
  
   addHidden('apply')
   addHidden('coupon-code')

  }
  
}



}