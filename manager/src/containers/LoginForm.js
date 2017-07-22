import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Button, FormInput, Spinner } from '../components/common';
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
	renderButton(){
		if(!this.props.loading) {
			return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Log In
				</Button>
			);
		} else {
			return <Spinner />;
		}
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
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
};

const styles = StyleSheet.create({
  errorTextStyle: {
		color: 'red',
		alignSelf: 'center',
		fontSize: 20
  },
});


const mapStateToProps = ({ auth: { email, password, error, loading } }) => {
	return { email, password, error, loading };
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);