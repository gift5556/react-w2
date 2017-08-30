import React from 'react';

class calculator extends React.Component {
	constructor(){
    super();
    this.state = {a: "" , b: ""};
  }
  setA(ii){
  	const x = ii.target.value;
  	this.setState({a : x});
  }
   setB(oo){
  	const c = oo.target.value;
  	this.setState({b : c});
  }

	render() {
		return (
		<div>
			<div> Number1 : <input onChange = {this.setA.bind(this)}/></div>
			<div> Number2 : <input onChange = {this.setB.bind(this)}/></div>
			<div> sum = {this.state.a + this.state.b}</div>
			
		</div>

		);
	}
}
export default calculator;