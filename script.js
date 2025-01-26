const container = document.querySelector("#container");

document.body.style.margin = "0";

const wrapper = document.createElement("div");
wrapper.style.backgroundColor = "#FF00FF";
container.appendChild(wrapper); 

const h1 = document.createElement("h1");
h1.textContent = "DOM Practice"; 
h1.style.borderBottom = "2px solid black"; 
h1.style.backgroundColor = "#FF00FF";
h1.style.marginBottom = "0px"; 
h1.style.marginTop = "0px"; 
h1.style.height = "100px"; 
h1.style.display = "flex"; 
h1.style.justifyContent = "center"; 
h1.style.alignItems = "center"
container.appendChild(h1); 

const main = document.createElement("div"); 
main.style.display = "flex"; 
main.style.flexDirection = "column"; 
main.style.backgroundColor = "purple"; 
container.appendChild(main); 

const h2 = document.createElement("h2"); 
h2.textContent = "Content Boxes"; 
h2.style.textAlign = "center"; 
h2.style.paddingTop = "30px"; 
main.appendChild(h2); 

const flexContainer = document.createElement("div"); 
flexContainer.style.display = "flex"; 
flexContainer.style.gap = "100px"; 
flexContainer.style.justifyContent = "center"; 
flexContainer.style.alignItems = "center";
flexContainer.style.height = "760px"; 

main.appendChild(flexContainer); 


for (let i = 1; i <=3; i++){
    const content = document.createElement("div"); 
    content.style.width = "500px"; 
    content.style.height = "500px"; 
    content.style.borderRadius = "5px"; 
    content.style.backgroundColor = `rgb(${i * 50}, ${i * 80}, ${i * 120})`; 
    content.style.color = "black"; 
    content.textContent = "This is Content Box Number ${i}"
    content.style.display = "flex"; 
    content.style.alignItems = "center"; 
    content.style.justifyContent = "center"; 
    content.style.border = "2px solid black";
    flexContainer.appendChild(content); 
}

