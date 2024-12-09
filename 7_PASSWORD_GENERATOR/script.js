const inputSlider = document.querySelector("[data-lengthSlider]") ; 
const lengthDisplay = document.querySelector("[data-lengthNumber]") ; 
const paswordDisplay = document.querySelector("[data-passwordDisplay]") ; 
const copyBtn = document.querySelector("[data-copy]") ; 
const copyMsg = document.querySelector("[data-copyMsg]") ; 
const uppercaseCheck = document.querySelector("#uppercase") ; 
const lowercaseCheck = document.querySelector("#lowercase") ; 
const numbersCheck = document.querySelector("#numbers") ; 
const symbolsCheck = document.querySelector("#symbols") ; 
const indicator = document.querySelector("[data-indicator]") ; 
const generateBtn = document.querySelector(".generate-button") ; 
const allCheckBox = document.querySelectorAll("input[type=checkbox]") ;


const symbol = '~`!@#$%^&*()_-+={}[]\|;:",./<>?'
let password = "" ; 
let passwordLength = 10 ; 
let checkCount = 0; 
// set indicator to grey.

allCheckBox.forEach((checkbox) => {

    if(checkbox.checked){
        checkCount ++ ; 
    }
})

handleSlider();
setIndicator("#ccc") ; 
// set password length.
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}


function setIndicator(color) {
    indicator.style.backgroundColor = color ; 
    indicator.style.boxShadow  = `0 0 12px 1px ${color}` ; 
    //shadow
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /*
    math.floor -> round off
    Math.random() -> [0 , 1) ; 
    [0 , 1) * (max-min) = [0 ,(max-min) ) ; 
    add both side min -> [min , max) ;
    */
}

function generateRandomNumber(){

    return getRndInteger(0 , 9 ) ; 
}

function generateLowerCase(){
    return  String.fromCharCode(getRndInteger(97, 123))  ;  
    // ascii val se char return krta h. 
}

function generateUpperCase(){
    return  String.fromCharCode(getRndInteger(65, 91))  ;  
    // ascii val se char return krta h. 
}


function generateSymbol() {
    return symbol.charAt(getRndInteger(0 , symbol.length)) ; 
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } 
    else if ((hasLower || hasUpper) &&(hasNum || hasSym) &&passwordLength >= 6) {
        setIndicator("#ff0");
    } 
    else {
        setIndicator("#f00");
    }
}

async function copyContent(){

    try{

        // ye mtd clipboard pe write krta h or ek promise retun krta h to jb jk 
        // ye promise resolve nhi hota hm await krenge.
        await navigator.clipboard.writeText(paswordDisplay.value) ; 

        copyMsg.innerText = "Copied!" ;
    }
    catch(e){
        copyMsg.innerText = "failed!" ; 
    }

    // to make copy wala span visible
    copyMsg.classList.add("active") ;
    
    setTimeout(() => {
        copyMsg.classList.remove("active") ;
    } , 2000) ; 

}

// shuffle the password
function shufflePassword(array){
    //fisher yates method
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckboxChange(){
    checkCount = 0 ;
    
    allCheckBox.forEach((checkbox) => {

        if(checkbox.checked){
            checkCount ++ ; 
        }
    });

    // special case.
    if(passwordLength < checkCount ) {
        passwordLength = checkCount ;

        handleSlider() ; 
    }

}
// eventlistner in all checkbox.
allCheckBox.forEach((checkbox) =>  {
    checkbox.addEventListener('change' , handleCheckboxChange) ; 
})

inputSlider.addEventListener('input' , (e) => {
    passwordLength = e.target.value ; 
    handleSlider() ;
}) ; 

copyBtn.addEventListener('click' ,() => {
    if(paswordDisplay.value)
        copyContent() ; 
}) ;  

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password

    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();

    }


    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {

        let randIndex = getRndInteger(0 , funcArr.length);

        password += funcArr[randIndex]();

    }

    //shuffle the password

    password = shufflePassword(Array.from(password));

    //show in UI

    paswordDisplay.value = password;

    //calculate strength
    calcStrength();
});














