import { useState, useRef } from 'react';
import { validateLoginCheck } from '../../util/validate.js';

export function Login2() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        msgIdRef: useRef(null),
        msgPassRef: useRef(null)
    }

    const {msg, setMsg} = useState({id: '', pass: ''});

    //입력 되어지는 모든 데이터들을 form에다가 저장
    const [form, setForm] = useState({id: '', pass: ''}); //데이터가 많아지면 const로 빼기
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value}); //react가 관리하는 메소드이다. 
        // 여기까지 끝나야 form에 데이터가 들어가가 때문에 
        // 이 아래에 console.log 해도 빈값으로 들어간다
        
        //없던 아이디 비번 입력되면 상태가바뀌는거니까
        //많아지면 지저분해질테니 const로 따로 빼는것도.
        // refs.msgIdRef.current.innerText ="";
        // refs.msgPassRef.current.innerText ="";
    } 

    const handleResetForm = () => {
        setForm({id:'', pass:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //브라우저(DOM객체) 이벤트 정지
        if(validateLoginCheck(refs, setMsg)) {
            console.log("submit===>>", form);
        }
    }

    return(
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input  type="text"
                                name="id"
                                value={form.id} 
                                ref={refs.idRef} //값이생기면 그 주소값을 여기다 넣어라
                                onChange={handleChangeForm}/>
                        <span ref={refs.msgIdRef}>{msg.id}</span>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input  type="password"
                                name="pass"
                                value={form.pass} 
                                ref={refs.passRef}
                                onChange={handleChangeForm}/>
                        <span ref={refs.msgPassRef}>{msg.pass}</span>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button"
                                onClick={handleResetForm}>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    );
}