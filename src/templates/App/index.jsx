import * as Styled from './styles'
import {Heading} from '../../components/Heading'
import { Base } from '../Base'
import { mockBase } from '../Base/stories'

function Home() {
  return (
    <Base {...mockBase} />
    /*
    <div className="App">
      <Styled.Wrapper>
        <Heading>Olá, Seja Bem Vindo!!!</Heading>
      </Styled.Wrapper>
    </div> */
  ) 
}

export default Home
