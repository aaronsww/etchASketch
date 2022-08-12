let s;
document.querySelector('#size'); 
size.addEventListener('click', (event) => {
        s = prompt("enter size");
        if(s <= 64) {
            generate();
        }
        else    
            alert("Oops, try something lower.");
});

function generate()
{
    for(let i=1; i<=s;i++)
    {
        const container = document.querySelector('#container');
        const row= document.createElement('div');
        container.append(row);
        for(let j=1;j<=s;j++)
        {     
            const box = document.createElement('div');
            box.textContent = ""+i;
            row.append(box);
            box.classList.add("squeeze");
            box.style.cssText = ' border: 2px solid;'; 
            box.style.borderColor = "red";
            box.addEventListener('mouseenter', (event) => {
            box.classList.add("fill");
            });
        }
    }       
}


/*
box.style.cssText = ' background-color: green;  border: 2px solid;';   


document.querySelector('#clear'); 
clear.addEventListener('click', (event) => { 
    erase();
});


function erase()
{
    const nodelist = document.querySelectorAll('box');
    nodelist.forEach((box) => {
    box.classList.remove("cool");
    });
}   
*/
