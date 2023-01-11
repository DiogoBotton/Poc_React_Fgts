export const maskCpf = (v) => {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return v
}

export const maskCurrency = (val) => {
    val = val.replace(/\D/g, '');
    val = (val / 100).toFixed(2) + '';
    val = val.replace(".", ",");
    val = val.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    val = val.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return val;
}

export const maskCelular = (v) => {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
    v = v.replace(/(\d{5})(\d)/, "$1 - $2")
    return v
}

export const maskTelefone = (v) => {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
    v = v.replace(/(\d{4})(\d)/, "$1 - $2")
    return v
}

export const maskCep = (v) =>{
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, '$1-$2')
    v = v.replace(/(-\d{3})\d+?$/, '$1')
    return v
}