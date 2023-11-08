import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App using Redux</h2>
        <form>
          <input placeholder='Enter a Todo'
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          />
          <button
            type='submit'
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            GO
          </button>
        </form>
        <ul className='allTodos'>
          <li className='singleTodo'>
            <spna className="todoText">First Todo</spna>
            <button
              style={{
                padding: 10,
                borderRadius: 25,
                border: "1px solid white",
                color: 'white',
                backgroundColor: 'orangered'
              }}
            >Delete</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
