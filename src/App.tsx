// Depois de criar todas as peças separadamente (o formulário, a tabela, a regra de cálculo e o banco de dados), é neste arquivo que é juntado tudo para montar a tela que o usuário final vai ver.

import React from 'react';
import { EmployeeProvider } from './context/EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const App = () => {
  return (
    <EmployeeProvider>
      <Container>
        <h1>Gestão de Funcionários - IRRF</h1>
        <EmployeeForm />
        <EmployeeList />
      </Container>
    </EmployeeProvider>
  );
};

export default App;