import { useState, useRef } from 'react';
// 모든건 event 를 통해 처리되므로 action 필요없음
// 버튼을 누르면 자동으로 제출되었지만 여기서는 obSubmit 붙여줘야함 
// form 입력값은 string
export function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const [form, setForm] = useState({})
    const initForm = {
        id:"",
        password: ""
    }

/*
    // e.target의 형태 예시:
    {
        name: "username",  // input 태그의 name 속성
        value: "john_doe", // 현재 input에 입력된 값
        ...                // 그 외에도 id, type, className 등 다양한 속성들이 있음
    }

    // handleChangeForm 함수는 input 요소의 onChange 이벤트에 연결되어
    // 입력 값이 바뀔 때마다 해당 input의 name과 value를 가져온다.
*/
    const handlechangeForm = (e) => {
        const {name, value} = e.target; //form의 속성에 따라 더 추가될수도.
        //email, password 같은 다른 값들이 사라지지 않도록 spread 연산자로 기존 form 복사
        setForm({...form, [name]: value});  //object인지 array이지 모르니 {}로 감싼다
    }   

    const handleSubmit = (e) => {
        e.preventDefault(); //DPM에서 이벤트처리하면 안됨. 리액트 코드 내부에서 제어해야함.

        //↓이런식으로 하면 리액트 DOM을 거쳐서 브라우저 DOM까지 가서 처리하는것이라 별로이다.
        // const id = document.querySelector("#id").value;
        // if(id==="") {
        //     alert('아이디입력!!!');
        //     document.querySelector("#id").focus();
        // }

        if(idRef.current.value==="") {
            alert("아이디를 입력해주세요")
            idRef.current.focus();
        } else if(passwordRef.current.value==="") {
            alert("패스워드를 입력해주세요")
            passwordRef.current.focus();
        } else {
            console.log('전송데이터 -->', form);
        }
        

    }

    const handleFormReset = (e) => { setForm(initForm); }

    return (
        <>
            <h1>Login</h1>
            <form name="login-form"
                onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">아이디</label>
                        <input type="text"
                                name="id" 
                                value={form.id || ''}
                                ref={idRef}
                                placeholder='아이디를 입력해 주세요.'
                                onChange={handlechangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">패스워드</label>
                        <input type="password"
                                name='password' 
                                value={form.password || ''}
                                ref={passwordRef}
                                placeholder='패스워드를 입력해주세요.'
                                onChange={handlechangeForm} />

                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset"
                                onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>

            </form>
        </>
    );
}