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

/*
import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';

const e = React.createElement;
class LikeButton extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            liked : false,

        };
    }
    render() {
        //javascript에서 html 태그를 쓰는것는 말이 안된다.
        //밑에 태그 쓰는 것을 지원 하지 않기 때문에 babel.js 를 사용한다
        return <button type="submit" onClick={()=>{this.setState({liked:true})}}>
            {this.state.liked === true ? "Like" : "Liked"}
        </button>
        // jsx : (js + xml)
    }



}
//4개가 생기겼다.
//기존 html jquery에서 수정을 하려면
// <button>종하요<button/><button>종하요<button/><button>종하요<button/><button>종하요<button/><button>종하요<button/>
//많은 이름 하나라도 변경하려면 하면 하나하나 직접 쳐야하지만 컴포넌트만 수정하면 끝난다.
//재 사용성
//실재로는 한줄짜리 컴포넌트태그지만 실제로는 수십줄의 코드인다.
ReactDOM.render(<div><LikeButton /><LikeButton /><LikeButton /><LikeButton /><LikeButton /></div>,document.querySelector('#root'));
*/
