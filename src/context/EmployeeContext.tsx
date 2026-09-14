// Ele é o "Cérebro" ou o "Banco de Dados Central" da aplicação.

import React, { createContext, useState, ReactNode } from 'react';
import { Employee } from '../types';
import { calculateIRRF } from '../utils/irrfCalculator';

interface EmployeeContextType {
  employees: Employee[];
  employeeToEdit: Employee | null; // Estado para saber quem estamos editando
  setEmployeeToEdit: (emp: Employee | null) => void; // Função para acionar o modo de edição
  addEmployee: (emp: Omit<Employee, 'id' | 'salarioBase' | 'descontoIRRF'>) => void;
  updateEmployee: (id: string, emp: Omit<Employee, 'id' | 'salarioBase' | 'descontoIRRF'>) => void; // Nova função de atualizar
  removeEmployee: (id: string) => void;
}

export const EmployeeContext = createContext<EmployeeContextType>({} as EmployeeContextType);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  
  // Guarda o funcionário que o usuário clicou em "Editar". Se for null, o formulário está no modo de "Cadastrar"
  const [employeeToEdit, setEmployeeToEdit] = useState<Employee | null>(null);

  const addEmployee = (emp: Omit<Employee, 'id' | 'salarioBase' | 'descontoIRRF'>) => {
    const { salarioBase, descontoIRRF } = calculateIRRF(emp.salarioBruto, emp.descontoPrevidencia, emp.dependentes);
    const newEmployee: Employee = {
      ...emp,
      id: Date.now().toString(),
      salarioBase,
      descontoIRRF
    };
    setEmployees([...employees, newEmployee]);
  };

  // Função para atualizar os dados de um funcionário existente
  const updateEmployee = (id: string, emp: Omit<Employee, 'id' | 'salarioBase' | 'descontoIRRF'>) => {
    // Recalcula o imposto com base nos novos valores digitados
    const { salarioBase, descontoIRRF } = calculateIRRF(emp.salarioBruto, emp.descontoPrevidencia, emp.dependentes);
    
    // Atualiza a lista mapeando todos. Se achar o ID correto, substitui os dados; senão, mantém o antigo.
    setEmployees(employees.map(existingEmp => 
      existingEmp.id === id 
        ? { ...existingEmp, ...emp, salarioBase, descontoIRRF } 
        : existingEmp
    ));
    
    // Limpa o modo de edição após salvar
    setEmployeeToEdit(null);
  };

  const removeEmployee = (id: string) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ 
      employees, 
      employeeToEdit, 
      setEmployeeToEdit, 
      addEmployee, 
      updateEmployee, 
      removeEmployee 
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};