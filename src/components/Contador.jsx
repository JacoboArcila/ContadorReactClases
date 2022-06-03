import React, { Component } from 'react';
import { Container, Count, Button, ContainerButton } from './contadorStyles';


class Contador extends Component {
    state = {
        count: 0
    }

    sumar = () => {
        this.setState({count: this.state.count + 1})
    }

    resta = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

  render() {
    return (
      <Container>
          <Count>
              {this.state.count}
          </Count>
        <ContainerButton>
            <Button onClick={() => this.sumar()} >+</Button>
            <Button onClick={() => this.resta()}>-</Button>
        </ContainerButton>
      </Container>
    )
  }
}

export default Contador;
