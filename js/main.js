var elForm = document.querySelector(".header__form")

var elInput = document.querySelector(".header__input")

var elSpanMan = document.querySelector(".box__man")

var juft = []

var toq = []

elForm.addEventListener("submit" , function (evt){
    evt.preventDefault()

    if (elInput.value <= 0 || isNaN(elInput.value)){
        elSpanMan.textContent = " Iltimos 0  dan katta raqam kiriting , yokida son kiriting"
   }

    else if (elInput.value % 2 == 0){
        elSpanMan.textContent = elInput.value + " soni juft"
        juft.push(elInput.value)
        console.log(juft)
    }
    
   else{
    elSpanMan.textContent = elInput.value + " soni toq"
    toq.push(elInput.value)

    console.log(toq)
    
}
})