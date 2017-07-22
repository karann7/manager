import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, FormInput } from '../components/common';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange(password){
		this.props.passwordChanged(password);
	}
	render() {
		return (
			<Card>
				<CardSection>
					<FormInput 
					label={'Email'}
					placeholder={'email@gmail.com'}
					autoFocus={true}
					keyboardType={'email-address'}
					onChangeText={this.onEmailChange.bind(this)}
					value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<FormInput
					label={'Password'}
					placeholder={'Enter a Password'}
					secureTextEntry={true}
					onChangeText={this.onPasswordChange.bind(this)}
					value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={()=>console.log(`The email is: ${this.props.email} Password: ${this.props.password}`)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
}
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);