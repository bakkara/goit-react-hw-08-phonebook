import { Container } from "components/App/App.styled";
import phonebook from '../images/phonebook2.jpg'

export default function Home() {
  return (
    <Container>
      <h1>
        Contacts book welcome page
      </h1>
      <img src={phonebook} alt='img' width="300" style={{ display: 'block', margin: '0 auto' }} />
    </Container>
  );
}
