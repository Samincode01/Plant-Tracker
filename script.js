let thrivingList= [];
let strugglingList= [];

let total= document.getElementById("total");
let strugglingCount= document.getElementById("strugglingCount");
let thriveCount= document.getElementById("thriveCount");

const allCardSection= document.getElementById("allCard");
const mainContainer= document.querySelector("main")

function totalCount()
{
    total.innerText= allCardSection.children.length;
    thriveCount.innerText= thrivingList.length;
    strugglingCount.innerText= strugglingList.length;
}

totalCount();

function toggleStyle(id)
{
    console.log("click",id)
}
