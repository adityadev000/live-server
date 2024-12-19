const UserImage = document.querySelector(".user-image") ; 
const Namee = document.querySelector(".name") ; //font color x
const Datee = document.querySelector(".joined") ; //font color1
const userId = document.querySelector(".user-id") ; 
const info = document.querySelector(".info") ; //font color3
const ReposData = document.querySelector(".repos-data") ; //font color1
const followersData = document.querySelector(".followers-data") ; //font color1
const followingData = document.querySelector(".following-data") ; //font color1
const locationn = document.querySelector(".location") ; //font color 3 
const website = document.querySelector(".website") ; //font color 3 
const twitter = document.querySelector(".twitter") ; //font color 3 
const company = document.querySelector(".company") ;//font color 3 
const searchResult = document.querySelector(".search-result") ;
const searchBtn = document.querySelector(".search-btn") ;
const searchBar = document.querySelector(".search-bar") ; //font color1
const Theme = document.querySelector(".Theme") ;
const lightDark = document.querySelector(".light-dark") ;
const themeImg = document.querySelector(".theme-img") ;
const icons = document.querySelectorAll(".icons") ;
const formBar = document.querySelectorAll("[formbar]") ;




const data = document.querySelector(".data") ;
const crossBtn = document.querySelector(".crossbtn") ;
const heading = document.querySelector(".heading") ;

const reposPara = document.querySelector(".repos-para") ; // font color 3
const followersPara = document.querySelector(".followers-para") ; // font color 3
const followingPara = document.querySelector(".following-para") ; // font color 3

const wrapper = document.querySelector(".wrapper") ;//backgrong
const header = document.querySelector(".header") ;//font color2
// const puraBody = document.querySelector(".pura-body") ;//back-color 
const searchBox = document.querySelector(".search-box") ;//back-color 
const content = document.querySelector(".content") ;//back-color 

const url = "https://api.github.com/users/" ; 

let user = 'thepranaygupta' ; 

const yearArr = ["January" , "February" , "March" , "April" ,"May" , "June" , "July" ,"August","Sepetember" ,"october" , "November" , "December" ] ; 

let srcStatus = 0 ; 


formBar.preve
goToDark() ;


let currTheme = 'LIGHT' ; //font color2
lightDark.innerText = `${currTheme}` ; 
themeImg.src = `./assets/images/sun-icon.svg`  ;


function goToDark() {
    heading.style.color = "#FFFFFF" ;
    lightDark.style.color = "#FFFFFF" ;
    searchBar.style.color = "#FBFCFC" ;
    // searchBar.placeholder.style.color = "#FBFCFC" ;
    Namee.style.color = "#FFFFFF" ;
    Datee.style.color = "#FFFFFF" ;
    info.style.color = (info.innerText === 'Not Available' ) ?  "#8E95A3" : "#C6C9D1" ;
    reposPara.style.color = "#FFFFFF" ;
    followersPara.style.color = "#FFFFFF" ;
    followingPara.style.color = "#FFFFFF" ;
    ReposData.style.color = "#FFFFFF" ;
    followersData.style.color = "#FFFFFF" ;
    followingData.style.color = "#FFFFFF" ;
    userId.style.color = "#0079ff" ;
    locationn.style.color =  (locationn.innerText === 'Not Available' ) ?  "#8E95A3" :"#FFFFFF" ;
    website.style.color =  (website.innerText === 'Not Available' ) ?  "#8E95A3" :"#FFFFFF" ;
    twitter.style.color =  (twitter.innerText === 'Not Available' ) ?  "#8E95A3" :"#FFFFFF" ;
    company.style.color =  (company.innerText === 'Not Available' ) ?  "#8E95A3" :"#FFFFFF" ;

    wrapper.style.backgroundColor = "#141D2F";
    searchBox.style.backgroundColor = "#1E2A47";
    content.style.backgroundColor = "#1E2A47";
    data.style.backgroundColor = "#141D2F";

    searchBar.classList.remove('new-placeholder-color')  ;

    if(locationn.innerText === 'Not Available'){

        for(let i = 0 ; i < icons.length ; i ++ ) {
    
            icons[i].classList.add("nonactive") ;
        }
    }
    else{
        
        for(let i = 0 ; i < icons.length ; i ++ ) {
    
            icons[i].classList.remove("active") ;
        }
    }

}

function goToLight() {
    heading.style.color = "#4B6A9B" ;
    lightDark.style.color = "#4B6A9B" ;
    searchBar.style.color = "#4B6A9B" ;
    // searchBar.placeholder.style.color = "#FBFCFC" ;
    Namee.style.color = "#2B3442" ;
    Datee.style.color = "#4B6A9B" ;
    info.style.color = (info.innerText === 'Not Available' ) ?  "#8E95A3" : "#8399BA" ;
    reposPara.style.color = "#4B6A9B" ;
    followersPara.style.color = "#4B6A9B" ;
    followingPara.style.color = "#4B6A9B" ;
    ReposData.style.color = "#2B3442" ;
    followersData.style.color = "#2B3442" ;
    followingData.style.color = "#2B3442" ;
    userId.style.color = "#0079ff" ;
    locationn.style.color =  (locationn.innerText === 'Not Available' ) ?  "#8E95A3" :"#4B6A9B" ;
    website.style.color =  (website.innerText === 'Not Available' ) ?  "#8E95A3" :"#4B6A9B" ;
    twitter.style.color =  (twitter.innerText === 'Not Available' ) ?  "#8E95A3" :"#4B6A9B" ;
    company.style.color =  (company.innerText === 'Not Available' ) ?  "#8E95A3" :"#4B6A9B" ;

    wrapper.style.backgroundColor = "#F6F8FE";
    searchBox.style.backgroundColor = "#FEFEFE";
    content.style.backgroundColor = "#FEFEFE";
    data.style.backgroundColor = "#F6F8FE";

    searchBar.classList.add('new-placeholder-color')  ;

    if(locationn.innerText === 'Not Available'){

        for(let i = 0 ; i < icons.length ; i ++ ) {
    
            icons[i].classList.add("nonactive") ;
        }
    }
    else{
        
        for(let i = 0 ; i < icons.length ; i ++ ) {
    
            icons[i].classList.add("active") ;
        }
    }

}

function changeTheme() {
    if(currTheme === 'LIGHT' ){
//HM LIGHT ME JA RHE H 
        lightDark.innerText = 'DARK' ; 
        themeImg.src = `./assets/images/moon-icon.svg`  ;
        currTheme = 'DARK' ; 

        goToLight() ;  

    }
    else{
        //hm hm DARK me ja rhe h 
        lightDark.innerText = `LIGHT` ; 
        themeImg.src = `./assets/images/sun-icon.svg`  ;
        currTheme = 'LIGHT' ; 
        goToDark() ; 
    }
}

Theme.addEventListener("click" , changeTheme) ; 





if(searchBar.value != '' ){
    crossBtn.classList.add("active") ; 
}
function clearInput(){
    searchBar.value = "" ; 

    if(srcStatus === 1 ){
        searchResult.classList.remove('active') ;

        srcStatus = 0 ;
    }
}
crossBtn.addEventListener("click" , clearInput) ;





getData(user)  ;

async function getData(id) {


    try{

        const response = await fetch(`https://api.github.com/users/${id}`) ; 

        const data = await response.json() ;

        // console.log(data) ; 

        if(data.status === '404' && user != "" ){
            searchResult.classList.add("active") ;

            srcStatus = 1 ; 

        }
        else{

            if(id != "")
                renderData(data) ; 
            else{
                alert("please enter a valid Username")
            }
        }


    }
    catch{
        alert("something went wrong") ; 
    }
}

function renderData (data){

    UserImage.src = `${data.avatar_url}` ;
    Namee.innerText = data.name === null ? `${user}` : `${data.name}` ;

    const fetchDate = `${data.created_at}` ; 
    const year = fetchDate.substring(0,4) ; 
    const month = fetchDate.substring(5,7) ; 
    const month2 = yearArr[Number(month) -1 ] ; 
    const day = fetchDate.substring(8,10) ; 
    Datee.innerText = `Joined ${day} ${month2} ${year}`;

    userId.innerText = `@${data.login}`;
    userId.href = `${data.html_url}` ;
    
    info.innerText = data.bio === null ? `This profile has no bio` : `${data.bio}` ;

    ReposData.innerText = `${data.public_repos}` ;
    followersData.innerText = `${data.followers}` ;
    followingData.innerText = `${data.following}` ;

    locationn.innerText = data.location === null ? `Not Available` : `${data.location}` ;
    website.innerText = data.blog === (null || "" ) ? `Not Available` : `${data.blog}` ;
    twitter.innerText = data.twitter_username === null ? `Not Available` :  `${data.twitter_username}` ;
    twitter.href = `https://twitter.com/${data.twitter_username}`
    company.innerText = data.company === null ? `Not Available` : `${data.company}` ;

}

function searchUser(){

    user = searchBar.value ; 

    if(user != "" || user != null  ) ; 
        getData(user)  ;
}

searchBtn.addEventListener("click" , searchUser) ; 


function handleChange() {

    if(srcStatus === 1 ){
        searchResult.classList.remove("active") ;

        srcStatus = 0 ;
    }
}
searchBar.addEventListener("input" , handleChange) ; 






