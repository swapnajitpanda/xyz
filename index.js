const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputbox.value === ''){
        alert("you must write somthings!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();









// let product ={
//     name:'tshirt',
//     price:789,
//     rating:{
//         stars:4.5,
//         noOfReviews:453
//     },
// };
// console.log(product)
// console.log(typeof product)
// let str =JSON.stringify(product)
// console.log(str)
// console.log(typeof str)

// let newproduct=JSON.parse(str)
// console.log(newproduct)