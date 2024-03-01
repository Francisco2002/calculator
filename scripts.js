const dataArray = document.getElementsByClassName("data");
const displayCurrentValue = document.getElementById("current");
const displayMemoryValue = document.getElementById("memory");

Array.prototype.map.call(
    dataArray,
    dataItem => {
        dataItem.addEventListener("click", e => {
            const { type, value } = e.target.dataset

            if(type == "number")
                displayCurrentValue.innerText += value;
            else if(value == "C")
                clearLastDigit();
            else if(value == "AC")
                clearDisplay();
        })
    }
)

function clearLastDigit() {
    const text = displayCurrentValue.innerText
    displayCurrentValue.innerText = text.slice(0, text.length - 1);
}

function clearDisplay() {
    displayCurrentValue.innerText = "";
    displayMemoryValue.innerText = "";
}