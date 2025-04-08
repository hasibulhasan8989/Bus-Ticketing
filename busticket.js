function scrollToTicket() {
  scroll('ticket-section')

}


function clickMouse(event) {

  const count2 = getIntValue('count-2')

  if (count2 >= 4) {
    alert('You can only select up to 4 seats.');

    return;
  }

  const press = event.target.innerText
  addClasslist(press)

  const count1 = getIntValue('count-1') - 1
  setTextValue('count-1', count1)


  setTextValue('count-2', count2 + 1)

  const count3 = getIntValue('count-3') + 550
  setTextValue('count-3', count3)

  // setTextValue('sit-1',press)

  ecoPush('Class')
  pricePush('Price')
  sitPush('Sit',press)
  

  
 
  


  

  
 

  const count4 = getIntValue('count-4') + 550
  setTextValue('count-4', count4)

 

  if (count2 == 3) { document.getElementById('apply').removeAttribute('disabled') }



}



document.getElementById('phoneNumber').addEventListener('keyup', numberInput)

function numberInput(element) {
  const input = element.target.value
  const input2 = Number(input)
  const count2 = getIntValue('count-2')


  if (typeof (input2) == 'number' && !isNaN(input2) && count2 > 0 && input.trim() !== '') {
    document.getElementById('nextBtn').removeAttribute('disabled')
  }

  else {
    document.getElementById('nextBtn').setAttribute('disabled', true);
  }
  return input

}


document.getElementById('nextBtn').addEventListener('click', success)

function success() {
  removeHidden('successScreen')
  addHidden('ticket-section')
  addHidden('offerSection')
  addHidden('header')
  addHidden('footer')

  document.getElementById('phoneNumber').value = ''
  document.getElementById('count-2').innerText = 0
  document.getElementById('count-3').innerText = 0
  document.getElementById('count-4').innerText = 0
  document.getElementById('apply').classList.remove('hidden')
  document.getElementById('coupon-code').classList.remove('hidden')
  document.getElementById('apply').disabled=true;
  document.getElementById('nextBtn').disabled=true;
  document.getElementById('coupon-code').value=''

 pop1('dynamic')
 

  
  
  
  
  



}

function againPurchase() {
  addHidden('successScreen')
  removeHidden('ticket-section')
  removeHidden('offerSection')
  removeHidden('header')
  removeHidden('footer')
  scroll('scroll2')



}



document.getElementById('apply').addEventListener('click', applyCoupon)
function applyCoupon() {
  const input = document.getElementById('coupon-code').value

  if (input === 'NEW15') {
    const newTotal1 = getIntValue('count-4') * 0.85
    setTextValue('count-4', newTotal1)
    addHidden('apply')
    addHidden('coupon-code')
  } else if (input === 'Couple20') {
    const newTotal2 = getIntValue('count-4') * 0.80
    setTextValue('count-4', newTotal2)
    addHidden('apply')
    addHidden('coupon-code')
  } else if(input === '') {
    alert('Enter a coupon')
  }
  else{
    alert('Wrong coupon')
  }
}

function ecoPush(id){
  const box= document.getElementById(id)
  const push= document.createElement('p')
  push.innerText='Economy'
  push.classList.add('dynamic')
   box.appendChild(push)
}
function pricePush(id){
  const box= document.getElementById(id)
  const push= document.createElement('p')
  push.innerText=550
  push.classList.add('dynamic')
   box.appendChild(push)
}

function sitPush(id,value){
  const box= document.getElementById(id)
  const push= document.createElement('p')
  push.innerText=value
  push.classList.add('dynamic')
   box.appendChild(push)
}

// function ecoPop(id){
  
//   const pop =document.getElementById(id)
//   const popHtml= pop.innerHTML=`<p>Class</p>`
//     pop.appendChild(popHtml)


// }
// function pricePop(id){
  
//   const pop =document.getElementById(id)
//   const popHtml= pop.innerHTML=`<p>Price</p>`
//     pop.appendChild(popHtml)


// }
// function sitPop(id){
  
//   const pop =document.getElementById(id)
//   const popHtml= pop.innerHTML=`<p>Sit <span id="count-2" class="bg-[#1DD100] font-semibold px-2 rounded-full">0</span></p>`
//     pop.appendChild(popHtml)


// }


function pop1(className) {
  const elements = document.getElementsByClassName(className);
  for (let element of elements) {
    element.innerText = ''; // clears the text of each element
  }
}






