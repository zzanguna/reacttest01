import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';

//숙제 16 정답! 뜨도록 하기
class GuGuDan extends React.Component{

    /*constructor(props) {
        super(props);
        this.state = {
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            value:'',
            resultval : '',
            result: ''

        }
    }*/
    //실무에서는 constructor 안쓰고 그냥 state 선언해준다.
    state = {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9),
        value:'',
        resultval : '',
        result: ''

    }
    //메소드를 만들어 준다.
    //클래스 메소는 무조건 화살표 함수 써야한다.
    //function을 쓴다는 this가 달라져서 안된다.
    onSubmit = (e) => {
        e.preventDefault();
        var resultevale = this.state.value;
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState({
                first : Math.ceil(Math.random() * 9),
                second : Math.ceil(Math.random() * 9),
                resultval : resultevale,
                value:'',
                result: '정답'
            })
        }
        else {
            this.setState({
                value:'',
                result: '땡'
            })
        }
    };
    onChange = (e) => this.setState({value: e.target.value});
    //div가 하나 더 있다고 문제가 없지만
    //쓸데 없다고 생각하는 div를 지우고 싶다면 <></> 또는 <React.Fragment>를 해야한다.
    //() : 그룹 연산자 우선 순위 높이는 것 말고는 아무 의미 없다.
    //컨텐츠
    render() {
        return (
            <>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange}/>
                    {/*input.onchage = function(e){console.log(e.target.value)}*/}
                    <button>입력!</button>
                </form>
                <div>
                    {this.state.resultval} {this.state.result}
                </div>
            </>
        )
    }

}
ReactDOM.render(<GuGuDan />,document.querySelector('#root'));