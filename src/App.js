import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostIt from './components/PostIt';
import MyForm from './components/MyForm';

function App() {
  return (
    <>
      <header>
        <h1 className='text-center p-4'>To do list</h1>
      </header>
<main>
  <MyForm></MyForm>
  
</main>

   
    </>
  );
}

export default App;
