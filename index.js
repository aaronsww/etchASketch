let row;
const container = document.querySelector('#container');
let s=30;

function firstGrid()
{
    for(let i=1; i<=s;i++)
    {
        row= document.createElement('div');
        container.append(row);
        row.classList.add("test");
        for(let j=1;j<=s;j++)
        {   1  
            const box = document.createElement('div');
            box.textContent = ""+i;
            row.appendChild(box);
            box.style.cssText = ' border: 2px solid;'; 
            box.style.borderColor = "red";
            box.classList.add("erase");
            box.addEventListener('mouseenter', (event) => {
            box.classList.add("fill");
            });
        }
    }       
}

firstGrid();

document.querySelector('#size'); 
size.addEventListener('click', (event) => {
        s = prompt("enter size");
        if(s <= 64) {
            let rows = container.querySelectorAll('.test')
            rows.forEach((row) => {row.remove()})
            generate(s);
        }
        else    
            alert("Oops, try something lower.");
});

function generate(s)
{
    for(let i=1; i<=s;i++)
    {
        const row= document.createElement('div');
        row.classList.add("test");
        container.appendChild(row);
        for(let j=1;j<=s;j++)
        {     
            const box = document.createElement('div');
            box.textContent = ""+i;
            row.append(box);
            box.style.cssText = ' border: 2px solid;'; 
            box.style.borderColor = "red";
            box.classList.add("erase");
            box.addEventListener('mouseenter', (event) => {
            box.classList.add("fill");
            });
        }
    }       
}

document.querySelector('#clear'); 
clear.addEventListener('click', eraser);

function eraser()
{
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => {
        box.style.cssText = ' border: 2px solid; background-color: teal;'; 
        box.style.borderColor = "red";
        });
    let rows = container.querySelectorAll('.test')
    rows.forEach((row) => {row.remove()})
    generate(s);
}   

document.querySelector('#rubber'); 
rubber.addEventListener('click', (event) => {
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => { 
        box.addEventListener('mouseenter', (event) => {
            box.classList.add("wash");
            });
    })
});
