import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, desc }));
    setTitle("");
    setDesc("");
    setIsDisabled(true);
  };

  const disablebtn = () => {
    if (title.length && desc.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <form className='mt-10 text-center border-2 border-black p-5 rounded-md' onSubmit={submitHandler}>
      <input
        type="text"
        placeholder='Enter Title Here...'
        className='border-2 border-black px-5 py-2 outline-none mx-3'
        value={title}
        onClick={disablebtn}
        onChange={(e) => {
          setTitle(e.target.value);
          disablebtn();
        }}
      />
      <input
        type="text"
        placeholder='Enter Description Here...'
        className='border-2 border-black px-5 py-2 outline-none mx-3'
        value={desc}
        onClick={disablebtn}
        onChange={(e) => {
          setDesc(e.target.value);
          disablebtn();
        }}
      />
      <hr />
      <button
        type="submit"
        className={`w-[96%] mt-5 px-4 py-2 bg-black text-white font-bold rounded cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isDisabled}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
