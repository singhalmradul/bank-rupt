import React, { Component } from 'react';
import '../css/Title.css';
import Logo from '../img/logo.png';
import Bankrupt from '../img/bank-rupt.png';
class Title extends Component {
	render() {
		return (
			<div>
                <img src={Logo} />
                <img src={Bankrupt} />
			</div>
		);
	}
}
export default Title;
