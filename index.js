var si_calc_button = document.querySelector("#insert-number-si");
var da_calc_button = document.querySelector("#insert-number-da");

var formula_si = document.querySelector("#si-formula");
var formula_da = document.querySelector("#da-formula");

var input_si_n = document.querySelector("#insert-number-si");
var input_da_n = document.querySelector("#insert-number-da");

var result_si = document.querySelector("#si-result");
var result_da = document.querySelector("#da-result");

function update(nV, type) {
    switch(type) {
        case "si":
            formula_si.innerHTML = `sI = (${nV} - 2) * 180`;
                break;
        case "da":
            formula_da.innerHTML = `dA = ${nV} * (${nV} - 3) / 2`;
                break;
    }
}

const calcs = {
    calc_si: (nV) => {
        var result = (nV - 2) * 180;

        return result;
    },

    calc_da: (nV) => {
        var p = nV - 3;
        var r = (nV * p) / 2

        return r;
    }
}

input_si_n.addEventListener("change", () => {
    update(input_si_n.value, "si");
});

input_da_n.addEventListener("change", () => {
    update(input_da_n.value, "da");
});

si_calc_button.onclick = () => {
    result_si.innerHTML = calcs.calc_si(input_si_n.value);
};

da_calc_button.onclick = () => {
    result_da.innerHTML = calcs.calc_da(input_da_n.value);
};