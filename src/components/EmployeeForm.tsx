// Representa o formulário da aplicação, sendo o componente responsável por capturar os dados digitados pelo usuário, gerenciar se a ação é um "Novo Cadastro" ou uma "Edição", e enviar essas informações para o estado global do sistema.

import React, { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #6e6e6e;
  border-radius: 4px;
`;
const Button = styled.button<{ isEdit?: boolean }>`
  grid-column: span 2;
  padding: 0.75rem;
  /* Muda a cor do botão caso esteja editando para dar um feedback visual */
  background: ${props => props.isEdit ? '#ffc107' : '#0056b3'};
  color: ${props => props.isEdit ? 'black' : 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const EmployeeForm = () => {
  // Puxando as funções e estados do contexto
  const { addEmployee, updateEmployee, employeeToEdit, setEmployeeToEdit } = useContext(EmployeeContext);
  
  const [formData, setFormData] = useState({
    nome: '', cpf: '', salarioBruto: '', descontoPrevidencia: '', dependentes: ''
  });

  // O useEffect "observa" a variável employeeToEdit. 
  // Toda vez que o usuário clicar no botão "Editar" da tabela, o useEffect roda preenchendo os inputs.
  useEffect(() => {
    if (employeeToEdit) {
      setFormData({
        nome: employeeToEdit.nome,
        cpf: employeeToEdit.cpf,
        salarioBruto: employeeToEdit.salarioBruto.toString(),
        descontoPrevidencia: employeeToEdit.descontoPrevidencia.toString(),
        dependentes: employeeToEdit.dependentes.toString()
      });
    } else {
      // Limpa os campos se sair do modo de edição
      setFormData({ nome: '', cpf: '', salarioBruto: '', descontoPrevidencia: '', dependentes: '' });
    }
  }, [employeeToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const empData = {
      nome: formData.nome,
      cpf: formData.cpf,
      salarioBruto: Number(formData.salarioBruto),
      descontoPrevidencia: Number(formData.descontoPrevidencia),
      dependentes: Number(formData.dependentes)
    };

    // Define se vai adicionar um novo ou atualizar um existente
    if (employeeToEdit) {
      updateEmployee(employeeToEdit.id, empData);
    } else {
      addEmployee(empData);
    }
    
    // Limpa os campos
    setFormData({ nome: '', cpf: '', salarioBruto: '', descontoPrevidencia: '', dependentes: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Nome" required value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} />
      <Input placeholder="CPF" required value={formData.cpf} onChange={e => setFormData({...formData, cpf: e.target.value})} />
      <Input type="number" step="0.01" placeholder="Salário Bruto" required value={formData.salarioBruto} onChange={e => setFormData({...formData, salarioBruto: e.target.value})} />
      <Input type="number" step="0.01" placeholder="Desconto Previdência" required value={formData.descontoPrevidencia} onChange={e => setFormData({...formData, descontoPrevidencia: e.target.value})} />
      <Input type="number" placeholder="Dependentes" required value={formData.dependentes} onChange={e => setFormData({...formData, dependentes: e.target.value})} />
      
      {/* O texto do botão muda dependendo do modo */}
      <Button type="submit" isEdit={!!employeeToEdit}>
        {employeeToEdit ? 'Atualizar Funcionário' : 'Cadastrar Funcionário'}
      </Button>
      
      {/* Adicionamos um botão extra de Cancelar Edição para o usuário poder desistir de editar */}
      {employeeToEdit && (
        <button 
          type="button" 
          onClick={() => setEmployeeToEdit(null)}
          style={{ gridColumn: 'span 2', padding: '0.5rem', cursor: 'pointer' }}
        >
          Cancelar Edição
        </button>
      )}
    </Form>
  );
};

export default EmployeeForm;