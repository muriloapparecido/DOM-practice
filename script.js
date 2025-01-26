const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red"; 
redParagraph.textContent = "Hey I'm red!"; 
container.appendChild(redParagraph); 

const blueText = document.createElement("h3");
blueText.style.color = "blue"; 
blueText.textContent = "Hey I'm blue h3!"; 
container.appendChild(blueText); 

const div = document.createElement("div"); 
div.style.border = "2px solid black"; 
div.style.backgroundColor = "pink"; 
container.appendChild(div); 

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"; 
div.appendChild(h1); 

const p = document.createElement("p"); 
p.textContent = "ME TOO!"; 
div.appendChild(p); 

