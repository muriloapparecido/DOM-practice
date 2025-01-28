document.body.style.display = "flex";
document.body.style.flexDirection = "column"; 
document.body.style.justifyContent = "center"; 
document.body.style.alignItems = "center"
document.body.style.gap = "20px"; 
document.body.style.height = "100vh";



const titleText = document.createElement("h1"); 
titleText.textContent = "Background and Text Color Changer";
titleText.style.borderBottom = "2px solid black"; 
container.appendChild(titleText);


const text = document.createElement("div"); 
text.textContent = "This is just some simple text who's color will chang if you click the button";
container.appendChild(text);

const backgroundButton = document.querySelector("#bck"); 

backgroundButton.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
})

const textButton = document.querySelector("#txt"); 

textButton.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    document.body.style.color = `rgb(${r}, ${b}, ${g})`;
})



