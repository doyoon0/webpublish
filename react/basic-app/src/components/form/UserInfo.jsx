import { useState, useRef } from 'react';

export function UserInfo() {
    // const nameRef = useRef(null);
    // const ageRef = useRef(null);
    // const addressRef = useRef(null);

    const refs = {
        nameRef: useRef(null),
        ageRef: useRef(null),
        addressRef: useRef(null)
    };

    const [form, setForm] = useState({});
    const initForm = {
        name: "",
        age: "",
        address: ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(refs.nameRef.current.value === "") {
            alert("이름을 입력해주세요");
            refs.nameRef.current.focus();
        } else if(refs.ageRef.current.value ==="") {
            alert("나이를 입력해주세요.");
            refs.ageRef.current.focus();
        } else if (refs.addressRef.current.value ===""){
            alert("주소를 입력해주세요.");
            refs.addressRef.current.focus();
        } else {
            console.log('전송데이터 -->', form);
        }

    }

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleFormReset = (e) => { setForm(initForm); }

    return (
        <>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input type="text"
                                name="name" 
                                value={form.name || ''}
                                ref={refs.nameRef}
                                placeholder="이름을 입력해주세요."
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>나이</label>
                        <input type="text"
                                name="age"
                                value={form.age || ''}
                                ref={refs.ageRef}
                                placeholder="나이를 입력해주세요"
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>주소</label>
                        <input type="text" 
                                name="address"
                                value={form.address || ''}
                                ref={refs.addressRef}
                                placeholder="주소를 입력해주세요"
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button"
                                onClick={handleFormReset}>리셋</button>
                    </li>
                </ul>
            </form>
        </>
    );
}