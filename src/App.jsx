import React from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

const App = () => {
  return (
    <div className="container-fluid flex flex-col justify-center items-center">
      <h1 className='text-center font-bold text-2xl text-white bg-black p-5 w-full'>ImranDevify's To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
