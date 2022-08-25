function timer(){ // created a function for the timer
    return setInterval(() =>{ // setInterval takes 2 arguments (callback function, in milliseconds(1000=1 second))
    let heading1 =document.querySelector("#counter") // im setting timer for H1
    addingInt = parseInt(heading1.innerText); // i used parsenINT TO add 1 interger at a time
    heading1.innerText = addingInt+1
  },1000 /**after every 1 second it will add 1 */) 
};
timer()

const minus = document.querySelector("#minus"); // <button id='minus' > (➖) </button>
minus.addEventListener("click",() =>{ // i added an event listener to deduct from the count
    let heading1 = document.querySelector("#counter")
    addingInt = parseInt(heading1.innerText);
    heading1.innerText= addingInt-1  // its for deducting from the count
});
console.log(minus);

const plus=document.getElementById("plus"); // <button id='plus' > (➕) </button>
plus.addEventListener("click",() => { // i added an event listener to add on the count
    let heading1 = document.querySelector("#counter")
    addingInt = parseInt(heading1.innerText);
    heading1.innerText= addingInt+1  // for adding on the count 
});
console.log(plus);

// erro on heart
// heart = document.querySelector("#heart");
// heart.addEventListener("click",(event) => {
//     let heading1 = document.querySelector("#counter")
//     addingInt = parseInt(heading1.innerText);
//     let ul =document.querySelector(".likes")
//     event.preventDefault()
//     if (heart === heading1){
//         event = addingInt
//         let text =parseInt(event.children[0].innerText);
//         event.innerText= `${addingInt} has been liked <span> ${text + 1} </span> times`
//         // console.log(event)
//     } else {
//         let list = document.createElement("li").setAttribute('data-1',addingInt)
//         list.innerText = `${addingInt} has been like <span> 1 </span> time`
//         ul.appendChild(list)
//     }  
// })
// console.log(heart)


//initializing the number of times a certain number is clicked
let totalLikes = {};
heart = document.querySelector("#heart"); // tageted the heart 
heart.addEventListener("click",(event) => { // added event listener
    let heading1 = document.querySelector("#counter")
    addingInt = parseInt(heading1.innerText); // used tarnery statement  1st condition is (+= 1 of the count) 2nd condition is  (= 1 for the count)
    totalLikes[addingInt] ? totalLikes[addingInt] += 1 : totalLikes[addingInt] = 1 // this is to increase the times by likes 
    let ul =document.querySelector(".likes") // targeting the ul
    event.preventDefault()
    if (document.getElementById(`like-${addingInt}`)){  // this is for the list of likes 
        document.getElementById(`like-${addingInt}`).innerText =`${addingInt} has been liked 1  times`
        // console.log(event)
    } else {
        let list = document.createElement("li")
        list.id = `like-${addingInt}`
        list.innerText = `${addingInt} has been like 1  time`
        ul.appendChild(list)
    }  
})
console.log(heart)
 

// erro on pause
// pause = document.querySelector("#pause");
// let playing = !0
// pause.addEventListener("click",() => {
//     playing ? (playing = !1,clearInterval(timer()).innerText = "resume" ):(playing = !0,timer().innerText = "pause")
// })
// console.log(pause)


pause = document.querySelector("#pause"); // targeting the pause button
pause.addEventListener("click",() => {
    pause.innerText = (pause.innerText === "pause") ? "resume" : "pause"; // to interchange b2n pause and resume
    btn = document.querySelector("#pause")
    heading1 =document.querySelector("#counter")
    minusbtn = document.querySelector('#minus')
    submitbtn = document.querySelector('#submit')
    heartbtn = document.querySelector('#heart')
    let arrayOfButtons = [btn,heading1, minusbtn, submitbtn, heartbtn]; // targeting all the button so that they are all pause when pause and resumened after
    arrayOfButtons.forEach((button) => {"pause"!== button.id && (button.disabled =! pause)})
})
console.log(pause)


// // its not leaving the comment as its ment to
// commentForm = document.querySelector("#comment-form")[0];
// commentForm.addEventListener("submit",(event) =>{
//     event.preventDefault()
//     let comment = this.children[0]
//     let sentence = comment.value
//     comment.value = ""
//     let commentDiv = document.querySelector("#list")
//     let newPara = document.createElement("p")
//     commentDiv.appendChild(newPara)
//     newPara.innerText = sentence
// });


commentForm = document.querySelector("#comment-form"); // targeting div section
commentForm.addEventListener("submit",(event) =>{
    event.preventDefault()
    let comment = document.querySelector('#comment-input').value // selecting the input for value input
    let commentDiv = document.querySelector("#list") // selecting the div list
    let newPara = document.createElement("p") // greating a paragraph for the value input
    commentDiv.appendChild(newPara) 
    newPara.innerText = comment
});

