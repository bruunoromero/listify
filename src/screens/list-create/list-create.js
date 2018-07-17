import React from "react";
import { Container, Text } from "native-base";

import Header from "../../components/header/header";

export default () => (
  <Container>
    <Header hasBack backType="close" title="List Create" />
    <Text>Ola mundo</Text>
  </Container>
);
