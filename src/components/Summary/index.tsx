import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconClient } from '~/assets/Icons';
import { Button } from '~/components';
import {
  Container,
  Content,
  Header,
  Valor,
  Cliente,
  Desconto,
  Buttons,
  CheckDesconto,
} from './styles';

interface IProps {
  Itens: any;
  Fix: boolean;
}

const Summary: React.FC<IProps> = ({ Itens, Fix }: IProps) => {
  const [CollapseProposal, SetCollapseProposal] = useState(false);
  // const [valueDiscount, setValueDiscount] = useState();
  const history = useHistory();

  let valorTotal = 0;
  Itens.forEach((item: any) => {
    valorTotal += item.preco * item.quantidade;
  });

  // let valorFinal = valorTotal;

  // function discount() {
  //   valorFinal %= valueDiscount;
  // }

  return (
    <Container fix={Fix} estado={CollapseProposal}>
      <Header onClick={() => SetCollapseProposal(!CollapseProposal)}>
        <span>Resumo da Proposta</span>
      </Header>
      <Content>
        <Cliente>
          <span>Escolha um cliente</span>
          <Button FunctionClick>
            <IconClient />
            Clientes
          </Button>
        </Cliente>
        <Valor>
          Valor Total
          <span>
            {valorTotal.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </Valor>
        <Desconto>
          <span>Desconto</span>
          <div>
            <select>
              <option value="%">%</option>
              <option value="-">-</option>
              <option value="+">+</option>
            </select>
            <input
              placeholder="0"
              type="number"
              // onChange={e => setValueDiscount(e.target.value)}
            />
          </div>
        </Desconto>
        <CheckDesconto>
          <label htmlFor="AplicarDSC">
            <input name="AplicarDSC" type="checkbox" id="AplicarDSC" />
            Aplicar Desconto
          </label>
        </CheckDesconto>
        <Valor>
          Valor Final
          <span>
            {valorTotal.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </Valor>
        <Buttons>
          <Button
            FunctionClick={() => {
              history.push('/budget');
              // DeleteBudget(Id);
            }}
          >
            Descartar Proposta
          </Button>
          <Button FunctionClick>Enviar para Finalização</Button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Summary;
