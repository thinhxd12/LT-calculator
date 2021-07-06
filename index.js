
let arrSoNhap = document.querySelectorAll('.normalBtn');
console.log('arrSoNhap', arrSoNhap)

let arrPhepTinh = document.querySelectorAll('.calcBtn');
console.log('arrPhepTinh', arrPhepTinh)

let soThu1 = '';
let soThu2 = '';
let phepTinh = '';
let ketQua = '';


let renderKetQua = number => {
    document.querySelector("#ketQua").innerHTML = number;
}

let resetButton = () => {
    soThu1 = '';
    soThu2 = '';
    phepTinh = '';
    ketQua = '';
    nhapSo1();
}

//Nhap vao so thu 1

let nhapSo1 = () => {
    for (let number of arrSoNhap) {
        number.onclick = () => {
            let value = number.textContent;
            if (value === 'C') {
                renderKetQua('');
                resetButton();
            }
            else {
                soThu1 += value;
                renderKetQua(soThu1);
            }
        }
    }
}

nhapSo1();

//Nhan vao phep tinh

for (let phepTinhNhap of arrPhepTinh) {
    phepTinhNhap.onclick = () => {
        soThu1 = document.querySelector("#ketQua").textContent;
        soThu2 = '';
        let value = phepTinhNhap.textContent;
        if (value === "÷") {
            phepTinh = "÷";
            nhapSo2();
        }
        else if (value === "×") {
            phepTinh = "×";
            nhapSo2();
        }
        else if (value === "-") {
            phepTinh = "-";
            nhapSo2();
        }
        else if (value === "+") {
            phepTinh = "+";
            nhapSo2();
        }
    }
}

//Nhap vao so thu 2 

let nhapSo2 = () => {
    for (let number of arrSoNhap) {
        number.onclick = () => {

            let value = number.textContent;
            if (value === 'C') {
                renderKetQua('');
                resetButton();
            }
            else {
                soThu2 += value;
                renderKetQua(soThu2);
            }
        }
    }
}


//Nut =

document.querySelector('#ketQuaBtn').onclick = () => {
    if (phepTinh === "÷") {
        ketQua = Number(soThu1) / Number(soThu2);
        renderKetQua(ketQua);
        soThu1 = ketQua.toString();
        // soThu2 ='';
    }
    else if (phepTinh === "×") {
        ketQua = Number(soThu1) * Number(soThu2);
        renderKetQua(ketQua);
        soThu1 = ketQua.toString();
        // soThu2 ='';
    }
    else if (phepTinh === "-") {
        ketQua = Number(soThu1) - Number(soThu2);
        renderKetQua(ketQua);
        soThu1 = ketQua.toString();
        // soThu2 ='';
    }
    else if (phepTinh === "+") {
        ketQua = Number(soThu1) + Number(soThu2);
        renderKetQua(ketQua);
        soThu1 = ketQua.toString();
        // soThu2 ='';
    }
}

// Nut +/-

document.querySelector('#nutDoiDau').onclick = () => {
    let value = document.querySelector("#ketQua").textContent;
    soThu2 = (-Number(value)).toString();
    renderKetQua(soThu2);
}

// Nut %

document.querySelector('#nutPhanTram').onclick = () => {
    let value = document.querySelector("#ketQua").textContent;
    soThu2 = (Number(value) / 100).toString();
    renderKetQua(soThu2);
}