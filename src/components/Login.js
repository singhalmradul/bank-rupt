import '../css/Login.css';
import React, { Component } from 'react';
class Login extends Component {
	render() {
		return (
			<div className='login'>
				<h1>login</h1>
				<form>
					<label className='label'>username</label>
					<input
						className='field'
						type='text'
						placeholder='username'
						required
					/>
					<br />
					<label className='label'>password</label>
					<input
						className='field'
						type='password'
						placeholder='password'
						required
					/>
					<br />
					<input
						type='submit'
						value='login'
						class='login-btn'
					/>
					<p class='center'>or</p>
					<a>
						<button class='login-btn'>create a new account</button>
					</a>
				</form>
			</div>
		);
	}
}
export default Login;
