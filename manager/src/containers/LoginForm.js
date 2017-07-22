import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, FormInput } from '../components/common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
class LoginForm extends Component {
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange(password){
		this.props.passwordChanged(password);
	}
	onButtonPress(){
		const {  email, password } = this.props;
		this.props.loginUser({ email, password });
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
					<Button onPress={this.onButtonPress.bind(this)}>
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
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);