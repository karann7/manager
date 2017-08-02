// Karan Singh
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, clearForm, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm.js';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false };
  }
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
  onAccept(){
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }
  onDecline(){
    this.setState({ showModal: !this.state.showModal })
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
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          noBtn={this.onDecline.bind(this)}
          yesBtn={this.onAccept.bind(this)} >
          Are you sure you want to fire {this.props.name}?
        </Confirm>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave, clearForm, employeeDelete })(EmployeeEdit) ;
