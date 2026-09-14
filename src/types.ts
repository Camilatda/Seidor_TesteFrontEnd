// Criação de "contratos" ou moldes para os dados.

export interface Employee {
  id: string;
  nome: string;
  cpf: string;
  salarioBruto: number;
  descontoPrevidencia: number;
  dependentes: number;
  salarioBase: number;
  descontoIRRF: number;
}