let thrivingList= [];
let strugglingList= [];

let total= document.getElementById("total");
let strugglingCount= document.getElementById("strugglingCount");
let thriveCount= document.getElementById("thriveCount");

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingfilterBtn = document.getElementById('thriving-filter-btn')
const strugglingfilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection= document.getElementById("allCard");
const mainContainer= document.querySelector("main")
const filterSection= document.getElementsByClass("filtered-Section")

function totalCount()
{
    total.innerText= allCardSection.children.length;
    thriveCount.innerText= thrivingList.length;
    strugglingCount.innerText= strugglingList.length;
}

totalCount();

function toggleStyle(id)
{
    allFilterBtn.classList.remove('bg-black', 'text-white');
    thrivingfilterBtn.classList.remove('bg-black', 'text-white');
    strugglingfilterBtn.classList.remove('bg-black', 'text-white');  
    
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    thrivingfilterBtn.classList.add('bg-gray-300', 'text-black');
    strugglingfilterBtn.classList.add('bg-gray-300', 'text-black');
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black')
    selected.classList.add('bg-black', 'text-white')
}

mainContainer.addEventListener('click',function(event){
    const parenNode= event.target.parentNode.parentNode
    const plantName = parenNode.querySelector('.plantName').innerText
    const water = parenNode.querySelector('.water').innerText
    const light = parenNode.querySelector('.light').innerText
    const notes = parenNode.querySelector('.notes').innerText

    const cardInfo = {
        plantName,
        light,
        water,
        notes
    }
    const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)

    if(!plantExist)
    {
        thrivingList.push(cardInfo)
    }
    console.log(thrivingList)

})

function renderThriving()
{
    filterSection.innetHTML =''
}