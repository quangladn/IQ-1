var ketQua = []

function changeStyle(value){
    var element = document.getElementById(`${value}`);
    element.style.display = "none";
}
function choice(dapAn,index) {
    ketQua.push(dapAn)
    changeStyle(index)
    console.log(ketQua)
}


var dapAn = ['b','c','a','d','b','d','b','a','c']

function calculatorNum(list) {
    var num = 0
    for (let i = 0; i < ketQua.length; i++) {
        if (list[i] === dapAn[i]) {
            num ++
            console.log(num)
        }
        else {
            console.log(num)
        }
    }
    document.write(`<link rel="stylesheet" href="./index.css">
    <div class="center">
    <h1 style="text-align: center;" > điểm của bạn là </h1>
    <h1 style="text-align: center;" > ${num}/${dapAn.length} </h1>
    </div>`)
}

function xemDiem() {
    if (ketQua.length <= 45) {
        alert('lỗi ấn lại')
    }
    else {
        return
    }
    console.log(ketQua.length)
}

// xemDiem()