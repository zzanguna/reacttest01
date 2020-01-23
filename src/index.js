
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

