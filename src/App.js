import './App.css';
import Quiz from './Components/Quiz'
import {Jumbotron,Badge,Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Jumbotron fluid className="container w-50 text-center py-0">
        <Container>
          <h1>
            <Badge variant="secondary">General Quiz App !!!</Badge>
          </h1>
        </Container>
      </Jumbotron>
      <Quiz />
    </div>
  );
}

export default App;
