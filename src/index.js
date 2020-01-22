import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';

const e = React.createElement;
class LikeButton extends React.Component{
    constructor(props) {//리액트에서는 기본적으로 쓰는 부분
        super(props);
        //없는거나 마찬가지이다.
        this.state = {
            liked : false,

        };
    }
    render() {
        return <button type="submit" onClick={()=>{this.setState({liked:true})}}>Liked</button>
        //가운데는 속성을 넣어주는 것이다.
        //상태는 바뀔 수 잇는부분 바뀌는 부분
        //<button onclick="() => {console.log('clicked')" type="submit">Like<button> 이 태그를 만들겠다.
    }


}

ReactDOM.render(<LikeButton />,document.querySelector('#root'));
//react는 위에서부터 아래로 불러 온다
