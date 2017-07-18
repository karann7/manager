import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, FormInput } from '../components/common';
import { emailChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
	onEmailChange(text){
		this.props.emailChanged(text);
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
					secureTextEntry={true}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={()=>console.log('boop')}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email
	};
}
export default connect(mapStateToProps, { emailChanged })(LoginForm);