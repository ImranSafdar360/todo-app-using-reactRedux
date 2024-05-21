import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../Store/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const renderTask = tasks.length > 0 ? tasks.map((t, i) => (
    <li key={i} className='mb-3'>
      <div className='flex justify-between items-center w-[100%]'>
        <h5>{t.title}</h5>
        <h4>{t.desc}</h4>
        <button
          onClick={() => dispatch(deleteTask(i))}
          className='px-[.5rem] py-[.1rem] text-white font-semibold bg-red-500 rounded flex justify-center items-center'
        >
          Delete
        </button>
      </div>
    </li>
  )) : <h2>No Task Available</h2>;

  return (
    <div className="textarea border-2 border-black rounded-md w-[40%] h-[55vh] mt-5 overflow-x-hidden">
      <ul className='w-full bg-blue-100 p-5'>
        {renderTask}
      </ul>
    </div>
  );
};

export default TaskList;
