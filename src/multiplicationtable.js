import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';

class GuGuDan extends React.Component{
    state = {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9),
        value:'',
        resultval : '',
        result: ''

    }

    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            //숙제 선생님 답
            /*this.setState({
                result: '정답 : ' + this.state.value,
                first : Math.ceil(Math.random() * 9),
                second : Math.ceil(Math.random() * 9),
                value:'',
            })*/
            //setState를 함수화 하는 방법
            this.setState((prevSate)=>{//prevSate : 예전 상태값
                return {
                    result: '정답은 : ' + prevSate.value,
                    first : Math.ceil(Math.random() * 9),
                    second : Math.ceil(Math.random() * 9),
                    value:'',
                }
            })


        }
        else {
            this.setState({
                value:'',
                result: '땡',
            })
        }
    };
    onChange = (e) => this.setState({value: e.target.value});

    render() {
        return (
            <div>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange}/>
                    {/*input.onchage = function(e){console.log(e.target.value)}*/}
                    <button>입력!</button>
                </form>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }

}
ReactDOM.render(<GuGuDan />,document.querySelector('#root'));