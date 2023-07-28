
import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';


function App() {
  const [todoList,setTodoList] = useState(null);

  const fetchData = async () =>  {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    await axios.post(SERVER_URL,  {text});
    fetchData();
  }

  fetch('http://localhost:4000/api/todo')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <div className='App'>
      <h1>근로계약서</h1>
      <nav>
        <ol>
          <li>양당사자
            
            </li>
            <li>채용일자<input type="date"/></li>
            <li>계약시작<input type="date"/></li>
            <li>임금은 연봉계약서에 준한다
              임금은 매월 26일 통화로 전액을 직접 지급한다.
            </li>
            <li>기타의 근로조건은 취업규칙에 정한 바에 따른다</li>
        </ol>

      </nav>
          <p><input type="date"/></p>
          
      {todoList?.map((todo) => (
        <div key={todo.id}>
      <form onSubmit={onSubmitHandler}>
          <p>갑 : 사용자 : {todo.text}
            <input name='text' />
            <input type='submit' value='추가'/>
          </p>
          <p>을 : 근로자 : {todo.text1}
            <input name='text1' />
            <input type='submit' value='추가'/>
          </p>
          
      </form>
        <h1></h1>
        </div>
      ))}

    </div>
  );
}

export default App;
