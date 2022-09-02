// import './App.css';
// import PersonList from './components/PersonList/PersonList';
// import Person from './components/Person/Person';
// import PersonForm from './components/PersonForm/PersonForm';

// function App() {
//   return (
//     <div className="App">
//       <PersonList />
//       <PersonForm />
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PersonList from './components/PersonList/PersonList';
import PersonForm from './components/PersonForm/PersonForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<PersonList />}></Route>
            <Route exact path="/add-user" element={<PersonForm />}></Route>
            {/* <Route exact path="/dog-list" element={<DogList />}></Route>
            <Route path="/dog/:id" element={<DogDetails />}></Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

