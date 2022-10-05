import React, { useState } from "react";
import "./style.css";

let number = 3;
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);
  
 
  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value }); // 저장됨
  };    // ...은 나열

  const onSubmitHandler = (event) => { //아이디값을 넘겨줌
    event.preventDefault();//넘버를 제어해줌 = 제어하지않으면 무한으로 추가됨
    if (todo.title.trim() === "" || todo.body.trim() === "") return; //비어있으면 돌아가 
    setTodos([...todos, { ...todo, id: number }]); //
    setTodo(initialState);
    number++; //제어하지않으면 무한으로 추가됨
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form"> 
      <div className="groupinput-">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title" //제목
          value={todo.title} //투두타이틀 보내주는것
          className="add-input input-body" // 구분
          onChange={onChangeHandler} // value값 입력할때
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가</button>
    </form>
  );
}

export default Form;
