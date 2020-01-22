import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';
//input에 forcus 주기
//documet 선택 방법
class GuGuDan extends React.Component{
    state = {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9),
        value:'',
        result: ''

    }

    //리액트는 화면을 변경하고 우리는 데이터만 변경해준다.
    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState((prevSate)=>{//prevSate : 예전 상태값
                return {
                    result: '정답은 : ' + prevSate.value,
                    first : Math.ceil(Math.random() * 9),
                    second : Math.ceil(Math.random() * 9),
                    value:'',
                }
            });
            //dom 선택 방법
            this.input.focus()
        }
        else {
            this.setState({
                value:'',
                result: '땡',
            })
        }
    };
    onChange = (e) => this.setState({value: e.target.value});

    input;

    render() {
        console.log("렌더링");//처음에 ReactDOM.render 하는 순간 발동
        //onClike할때 등등 setState 변경할 때마다 render 함수가 발동된다.
        return (
            <>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={(c) => {this.input = c;}}type="number" value={this.state.value} onChange={this.onChange}/>
                    {/*input.onchage = function(e){console.log(e.target.value)}*/}
                    <button>입력!</button>
                </form>
                <div>
                    {this.state.result}
                </div>
            </>
        )
    }

}
ReactDOM.render(<GuGuDan />,document.querySelector('#root'));