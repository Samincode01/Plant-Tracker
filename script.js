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
    

    for(let thrive of thrivingList){
     div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
    div.innerHTML = `<div class="space-y-6">
                    <div>
                        <p class="plantName text-4xl">Plant name 2</p>
                        <p class="latinName">Latin name</p>
                    </div>

                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5" >Bright Indicate</p>
                        <p class="water bg-gray-200 px-5" >Weekly</p>
                    </div>
                    <p class="status">not applicable</p>
                    <p class="notes">Lorem ipsum dolor sit amet.</p>
                    <div class="flex gap-5">
                        <button class="thrive-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>`
    }

}