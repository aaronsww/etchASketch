let s;
const container = document.querySelector('#size'); 
size.addEventListener('click', (event) => {
    s = prompt("enter size");
    if(s <= 64)
        generate();
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
            box.style.cssText = ' border: 2px solid;'; 
            box.style.borderColor = "red";
            row.append(box);
            /* box.addEventListener('click', (event) => {
                box.style.cssText = ' background-color: black;';   
            }); */
            box.addEventListener('mouseenter', (event) => {
            box.style.cssText = ' background-color: black;';   
            });
        }
    }
}

/*box.addEventListener('click', alertFunction);
*/
