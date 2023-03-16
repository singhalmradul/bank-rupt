import '../css/Login.css';
import React, { Component } from 'react';
class Login extends Component {
	render() {
		return (
			<div className='login'>
				<h1>Login</h1>
				<form>
					<label>username</label>
					<input
						type='text'
						placeholder='username'
						required
					/>
					<br />
					<label>password</label>
					<input
						type='password'
						placeholder='password'
						required
					/>
					<br />
					<input
						type='submit'
						value='login'
						class='btn'
					/>
					<label>or</label>
					<a>
						<button class='btn'>create a new account</button>
					</a>
				</form>
			</div>
		);
	}
}
export default Login;
