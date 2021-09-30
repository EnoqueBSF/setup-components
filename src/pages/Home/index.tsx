import React, { useEffect } from 'react';
import aplicativosService from '~/services/AplicativosService';

import { Page } from '~/components';

import { Container } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    const load = async () => {
      console.log(await aplicativosService.getAll());
    };

    load();
  }, []);
  return (
    <Page>
      <Container>
        <h1>Home</h1>
      </Container>
    </Page>
  );
};

export default Home;
