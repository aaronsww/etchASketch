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
        {     
            const box = document.createElement('div');
            //box.textContent = ""+i;
            row.appendChild(box);
            box.style.cssText = 'flex : 1; height: auto; width: auto;'; 
            box.classList.add("erase");
            box.addEventListener('mouseenter', (event) => {
            box.classList.add("fill");
            });
        }
    }     
    let rows = container.querySelectorAll('.test')
        rows.forEach((row) => { 
             row.classList.add("boxFlex");
        })     
}

firstGrid();

document.querySelector('#size'); 
size.addEventListener('click', (event) => {
    rubber.classList.remove("onClickButton")
    colorPicker.classList.remove("onClickButton")
    rgb.classList.remove("onClickButton")
        size.classList.add("onClickButton")
        s = prompt("Input a number between 0 and 65");
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
            //box.textContent = ""+i;
            row.append(box);
            box.style.cssText = 'flex: 1; height: auto; width: auto;'; 
            box.classList.add("erase");
            box.addEventListener('mouseenter', (event) => {
            box.classList.add("fill");
            }); 
        }
    }   
    let rows = container.querySelectorAll('.test')
        rows.forEach((row) => { 
             row.classList.add("boxFlex");
        })         
}

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

document.querySelector('#rgb'); 
rgb.addEventListener('click', (event) => {
    rubber.classList.remove("onClickButton")
    colorPicker.classList.remove("onClickButton")
    rgb.classList.add("onClickButton") 
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => { 
        box.addEventListener('mouseenter', (event) => {
            let colorString = randColor();
            box.style.cssText = `flex: 1; background-color: ${colorString}`;
            });
    })
});

document.querySelector('#rubber'); 
rubber.addEventListener('click', (event) => {
    rgb.classList.remove("onClickButton")
    colorPicker.classList.remove("onClickButton")
    rubber.classList.add("onClickButton")
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => { 
        box.addEventListener('mouseenter', (event) => {
            box.style.cssText = 'flex : 1; background-color: #F9FBFF;'; 
            });
    })
}); 

document.querySelector('#clear'); 
clear.addEventListener('click', eraseAll);

function eraseAll()
{
    rubber.classList.remove("onClickButton")
    rgb.classList.remove("onClickButton")   
    colorPicker.classList.remove("onClickButton")
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => {
        box.style.cssText = ' border: 2px solid; background-color: #F9FBFF;'; 
        box.style.borderColor = "black";
        });
    let rows = container.querySelectorAll('.test')
    rows.forEach((row) => {row.remove()})
    generate(s);
} 

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    rgb.classList.remove("onClickButton")
    rubber.classList.remove("onClickButton")
    let boxes = container.querySelectorAll('.erase')
    boxes.forEach((box) => { 
        box.addEventListener('mouseenter', (event) => {
            box.style.cssText = ` flex :1 ;background-color: ${rgbaColor}`;
            });
    })
})

document.querySelector('#colorPicker'); 
colorPicker.addEventListener('click', (event) => {
    rubber.classList.remove("onClickButton")
    rgb.classList.remove("onClickButton")
});
