for(let i=1; i<=16;i++)
{
    const container = document.querySelector('#container'); 
    const row= document.createElement('div');
    container.append(row);
    for(let j=1;j<=16;j++)
    {     
        const box = document.createElement('div');
        box.textContent = ""+i;
        box.style.cssText = ' border: 2px solid;';
        row.append(box);
    }
}
