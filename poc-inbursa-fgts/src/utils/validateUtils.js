/* eslint-disable */
export const validateCpf = (val) => {
    var cpf = val.trim();

    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace('-', '');
    cpf = cpf.split('');

    var v1 = 0;
    var v2 = 0;
    var aux = false;

    for (let i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return false;
    }

    for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
        v1 += cpf[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
        v1 = 0;
    }

    if (v1 != cpf[9]) {
        return false;
    }

    for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
        v2 += cpf[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
        v2 = 0;
    }

    if (v2 != cpf[10]) {
        return false;
    } else {
        return true;
    }
};

export const validateEmptyFields = (val) => {
    var array = Object.values(val);
    
    if(array.length === 0)
        return false;

    if(!array.every(x => x !== null && x !== undefined && x !== ""))
        return false;
    
    return true;
};

export const validCharacters = () => {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
}