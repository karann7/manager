// Karan Singh
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, clearForm } from '../actions';
import EmployeeForm from './EmployeeForm.js';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  onButtonPress (e) {
    const { name, phone, email, shift } = this.props;
    this.props.employeeSave({ name, phone, email, shift, uid: this.props.employee.uid });
  }
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onTextSchedule() {
    const { phone, shift, name } = this.props;
    Communications.text(phone, `Hi, ${name}. Your upcoming shift is on ${shift}`);
  }
  componentWillUnmount() {
    this.props.clearForm();
  }
  onFirePress() {
    console.log('boop');
    const { phone, name } = this.props;
    Communications.text(phone, `Hi, ${name}. We regret to inform you, that you have been let go. Thank you, for your service.`);
  }
  render() {
    let { pickerLabelText } = styles;
    return (
      <ScrollView>
        <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextSchedule.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>
            Fire
          </Button>
        </CardSection>
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pickerLabelText: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = state => {
  const { name, phone, email, shift } = state.employeeForm;
  return { name, phone, email, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, clearForm })(EmployeeEdit) ;
