import React from 'react';
import { IconBudget } from '~/assets/Icons';
import { Button } from '~/components';
import { Container } from './styles';

const BudgetNone: React.FC = () => {
  return (
    <Container>
      <p>
        Opa, parece que você ainda não possui nenhuma proposta de orçamento!
      </p>
      <IconBudget />
      <p>
        Clique aqui para criar um <b>novo orçamento:</b>
      </p>
      <Button
        FunctionClick={() => {
          console.log('err');
        }}
      >
        Criar Orçamento
      </Button>
    </Container>
  );
};

export default BudgetNone;
