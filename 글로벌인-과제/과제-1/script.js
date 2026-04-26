const dom = document.getElementById("dom-dom-dom")
const bom = document.getElementById("bom-bom-bom")

let count = 0;
let dom_text;
let bom_text;

// Promise로 Timeout 설정
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1000ms마다 출력
async function print_like_crazy() {
    while (count<10){
    dom_text = document.createTextNode(`돔돔돔: ${count}`)
    bom_text = document.createTextNode(`봄봄봄: ${count}`)

    dom.appendChild(dom_text)
    dom.appendChild(document.createElement("br"))    
    bom.appendChild(bom_text)
    bom.appendChild(document.createElement("br"))    


    count++;
    await wait(1000);
};}


print_like_crazy()

