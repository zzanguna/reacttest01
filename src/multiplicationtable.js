import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';
//hooks로 변경하기
const GuGuDan = () => {
    //setstate만드는 방법
    const [first,  setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second,  setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value,  setValue] = React.useState('');
    const [result,  setResult] = React.useState('');
    const inputRef = React.useRef(null);
    //무조건 컴포넌트 안에 넣어야한다.
    const onChageInput = (e) => {
        setValue(e.target.value);
    }

    const  onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            // setResult("정답 : " + value);
            //setdata를 할때 setState처럼 함수르 사용할 수 있는데 옛날 prevResult를 사용할 경우 사용할 수 있다.
            setResult((preResult) => {
                return "정답" + value;
            })
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue("");
            //dom 선택 방법
            inputRef.current.focus();
        }
        else {
            setResult("땡" );
            setValue("");
            inputRef.current.focus();
        }
    }
    return (
        <>
            <div>{first} 곱하기 {second}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChageInput} value={value}/>
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}
ReactDOM.render(<GuGuDan />,document.querySelector('#root'));