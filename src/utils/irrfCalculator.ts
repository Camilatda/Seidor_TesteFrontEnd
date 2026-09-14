// Este arquivo é o coração matemático do teste (Business Logic). Ele fica isolado da interface gráfica para garantir que os cálculos funcionem perfeitamente.
// Este código atende às fórmulas e à tabela progressiva exigidas no documento da vaga

export const calculateIRRF = (salarioBruto: number, descontoPrevidencia: number, dependentes: number) => {
  const deducaoDependente = 189.59;
  const salarioBase = salarioBruto - descontoPrevidencia - (deducaoDependente * dependentes);
  
  let aliquota = 0;
  let parcelaDeduzir = 0;

  if (salarioBase <= 2259.20) {
    aliquota = 0; parcelaDeduzir = 0;
  } else if (salarioBase <= 2826.65) {
    aliquota = 0.075; parcelaDeduzir = 169.44;
  } else if (salarioBase <= 3751.05) {
    aliquota = 0.15; parcelaDeduzir = 381.44;
  } else if (salarioBase <= 4664.68) {
    aliquota = 0.225; parcelaDeduzir = 662.77;
  } else {
    aliquota = 0.275; parcelaDeduzir = 896.00;
  }

  const descontoIRRF = (salarioBase * aliquota) - parcelaDeduzir;
  
  return {
    salarioBase: Math.max(0, salarioBase),
    descontoIRRF: Math.max(0, descontoIRRF)
  };
};