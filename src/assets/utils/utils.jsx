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