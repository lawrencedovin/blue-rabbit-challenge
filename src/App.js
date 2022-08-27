import './App.css';
import PersonList from './components/PersonList/PersonList';
import Person from './components/Person/Person';
import PersonForm from './components/PersonForm/PersonForm';

function App() {
  return (
    <div className="App">
      <PersonList />
      <PersonForm />
    </div>
  );
}

export default App;
