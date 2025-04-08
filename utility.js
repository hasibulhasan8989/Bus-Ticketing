document.getElementById('select').addEventListener('click',clickMouse)



function addClasslist(element){
 document.getElementById(element).classList.add('bg-[#1DD100]') 
}

function getIntValue(element){
    const elementText=document.getElementById(element).innerText
    const value=parseInt(elementText)
    return value
}

function setTextValue(element,value){
    document.getElementById(element).innerText=value
}

function addHidden(section){
    document.getElementById(section).classList.add('hidden')
}
function removeHidden(section){
    document.getElementById(section).classList.remove('hidden')
}

function scroll(sectionName) {
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' })
  
  }
