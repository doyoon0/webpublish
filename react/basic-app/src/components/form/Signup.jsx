import './cgvSignup.css';
import { validateFormCheck } from '../../util/validate.js';
import { initForm } from '../../util/init.js';
import React, { useState, useRef, useMemo } from 'react';

export function Signup() { 
    const initArray = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailName', 'emailDomain'];
    // const initForm= initArray.reduce((acc, cur) => {
    //     acc[cur] = "";
    //     return acc;
    // }, {}); 

    //초기값을 {}로 주고, cur 현재 처리중인 값에 따라 acc의 결과가 달라지는것
    //대괄호 표기법으로 key 표기 ex. const obj = {name: 'Alice'} --> obj['name']
    //cur이 키값 : 숫자면 누적합이 되는거고, 변수면 차곡차곡 쌓이는것
    const refs= useMemo(() => { //Hooks 비동기식 처리 진행
        return initArray.reduce((acc, cur) => {
            acc[`${cur}Ref`] = React.createRef();
            return acc;
        }, {});
    }); 


    const [errors, setErrors] = useState({...initForm(initArray), emailDomain: ""});

    /* (0).입력되는 데이터들을 form에다 저장 */
    const [form, setForm] = useState(initForm(initArray));

    /* (1).폼 업데이트 이벤트 */
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value});
        setErrors({...initForm(initArray), emailDomain: ""});

        //해당 name에 맞는 메세지만 초기화
        // if(refs[name]) {
        //     refs[name].current.innerText = "";
        // }
    }

    
    /* (2).폼 초기화 이벤트 */
    const handleResetForm = () => {
        setForm(initForm);
    }
    
    /* (3).폼 제출 이벤트 */
    const handleSubmit = (e) => {
        e.preventDefault();
         const param = {  refs: refs,   setErrors: setErrors }
        //validation check 
        if(validateFormCheck(param)) {
            console.log("submit====>", form);
        }
    }

    console.log(form);

    return (
    <div className="content">
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입(React)</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label><b>아이디</b></label>
                        <span style={{color: "red", fontSize:"0.7rem"}}>{errors.id}</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    value={form.id}
                                    ref={refs.idRef}
                                    placeholder = "아이디 입력(6~20자)"
                                    onChange={handleChangeForm} />
                            <button type="button" 
                                  > 중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label><b>비밀번호</b></label>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    value={form.pwd}
                                    ref={refs.pwdRef}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label><b>비밀번호 확인</b></label>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    value={form.cpwd}
                                    ref={refs.cpwdRef}
                                    placeholder="비밀번호 재입력"
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label><b>이름</b></label>
                        <div>
                            <input type="text" 
                                    name="name"
                                    value={form.name}
                                    ref={refs.nameRef}
                                    placeholder="이름을 입력해주세요"
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label><b>전화번호</b></label>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    value={form.phone}
                                    ref={refs.phoneRef}
                                    placeholder="휴대폰 번호 입력('-' 포함)"
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label><b>이메일 주소</b></label>
                        <span style={{color: "red", fontSize:"0.7rem"}}>{errors.emailDomain}</span>
                        <div>
                            <input type="text" 
                                    name="emailName"
                                    value={form.emailName}
                                    ref={refs.emailNameRef}
                                    placeholder="이메일 주소"
                                    onChange={handleChangeForm}/>
                            <span>@</span>       
                            <select name="emailDomain" 
                                    value={form.emailDomain} 
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeForm}>
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset"
                                onClick={handleResetForm}>가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
}