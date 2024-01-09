import React from "react";

export const cpfMask = (value) => {
    const regexCpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    const cpfFormatado = value.replace(regexCpf, '$1.$2.$3-$4');
    return cpfFormatado;
}
export const cnpjMask = (value) => {
    const regexCnpj = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
    const cnpjFormatado = value.replace(regexCnpj, '$1.$2.$3/$4-$5');
    return cnpjFormatado;
}

export const inputValueMask = (value, casas) => {
    if (!value && !casas) {
        value = 0;
    }
    let v = value;
    if(typeof value == 'number'){
        v = value.toFixed(casas ? casas : 2);
    }

    var negativo
    if (v && v.includes('-')) {
        negativo = true;
    }
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d+)(\d{2})/, "$1,$2");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    // if(value < 0)
    return negativo ? `-${v}` : v;
 };

 export const onlyNumbers = (value) => {
    return value.replace(/\D/g, "");
 };

 export const convertToFloat = (value) => {
    if(typeof value === 'number') return value;
    if(typeof value === null) return 0;
    const valorString = value;

    const valorNumerico = valorString.replaceAll('.', '').replaceAll(',', '.');

    const valorFloat = parseFloat(valorNumerico);

    return valorFloat;
}