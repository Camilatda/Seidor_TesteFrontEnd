// Ele é a "vitrine" da aplicação e cobre as partes de Read (Listar e Filtrar) e Delete (Excluir) do seu CRUD, além de servir como o "gatilho" para a edição de um funcionário.

import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;
const Th = styled.th`
  background: #0056b3;
  color: white;
  padding: 0.5rem;
  text-align: left;
`;
const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;
// Botões flexíveis para suportar cores diferentes
const Button = styled.button<{ bgColor?: string }>`
  background: ${props => props.bgColor || '#dc3545'};
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const EmployeeList = () => {
  // Trazendo a função setEmployeeToEdit do contexto
  const { employees, removeEmployee, setEmployeeToEdit } = useContext(EmployeeContext);
  const [filter, setFilter] = useState('');

  const filtered = employees.filter(e => 
    e.nome.toLowerCase().includes(filter.toLowerCase()) || 
    e.cpf.includes(filter)
  );

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div>
      <h2>Funcionários Cadastrados</h2>
      <Input 
        placeholder="Filtrar por Nome ou CPF..." 
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Salário Bruto</Th>
            <Th>Desc. Prev</Th>
            <Th>Dependentes</Th>
            <Th>Salário Base IR</Th>
            <Th>Desconto IRPF</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(e => (
            <tr key={e.id}>
              <Td>{e.nome}</Td>
              <Td>{e.cpf}</Td>
              <Td>{formatCurrency(e.salarioBruto)}</Td>
              <Td>{formatCurrency(e.descontoPrevidencia)}</Td>
              <Td>{e.dependentes}</Td>
              <Td>{formatCurrency(e.salarioBase)}</Td>
              <Td>{formatCurrency(e.descontoIRRF)}</Td>
              <Td>
                {/* Novo botão de editar. Ao clicar, envia o funcionário 'e' para o contexto, acionando o formulário */}
                <Button bgColor="#ffc107" onClick={() => setEmployeeToEdit(e)}>Editar</Button>
                <Button onClick={() => removeEmployee(e.id)}>Excluir</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;