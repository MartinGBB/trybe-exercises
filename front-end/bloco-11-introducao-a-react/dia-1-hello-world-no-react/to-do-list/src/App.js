//import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
} 
const list = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar']

function App() {
  return (
    <section>
    <h1>Lista de tarefas</h1>
    <ul>{ list.map((tarefa) => Task(tarefa)) }</ul>
    </section>
    );
}

export default App;
</section>