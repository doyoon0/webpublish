import { MyButton } from "./components/MyButton.jsx";
import './App.css';
export default function App() {
    // function handleProps() {} //react 에서는 component, module 만들때만 사용
    // const handleProps = function() {}
    // 일반 핸들러, 콜백 등 내부 함수 정의시 arrow function 사용
    const handleProps = (result) => {
        console.log(`(부모)result-->`, result);
    }

    return (
        <div>
            <MyButton   name="Button #1" 
                        type="button" 
                        style="button" 
                        handleProps={handleProps} />
            <MyButton   name="Button #2" 
                        type="button" 
                        style="button"
                        handleProps={handleProps} />
        </div>
    );
}