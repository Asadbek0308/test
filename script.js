const wrapper = document.querySelector(".wrapper");
const rect = wrapper.getBoundingClientRect();

const sizes = [200, 50, 80];
const colors = ["rgb(0, 116, 255)", "rgba(82, 82, 82, 1)", "white"];

for(let i=0; i<80; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.zIndex = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
    block.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    block.style.width = sizes[Math.floor(Math.random()*sizes.length)] + "px";
    wrapper.appendChild(block);
}

const blocks = document.querySelectorAll(".block");

const minY = -(rect.height / 2) * 0.8;
const maxY = (rect.height / 2) * 0.8;
const minX = -(rect.width / 2) * 0.8;
const maxX = (rect.width / 2) * 0.8;
function generate(){
    blocks.forEach(block => {
        block.style.transform = `translateX(calc(-50% + ${Math.floor(Math.random() * (maxX - minX + 1)) + minX}px)) translateY(calc(-50% + ${Math.floor(Math.random() * (maxY - minY + 1)) + minY}px))`;
        block.style.zIndex = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
    })
}
generate();

function shape(){
    blocks.forEach(block => {
        block.classList.toggle("circle");
    })
    generate();
}
// let int = setInterval(generate, 400);