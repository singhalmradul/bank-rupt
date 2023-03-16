import React, { Component } from 'react';
import '../css/Title.css';
import Logo from '../img/logo.png';
import Bankrupt from '../img/bank-rupt.png';
class Title extends Component {
	render() {
		return (
			<div className='title'>
				<div className='image'>
					<img src={Logo} />
				</div>
				<div className='image'>
					<img src={Bankrupt} />
				</div>
			</div>
		);
	}
}
export default Title;
