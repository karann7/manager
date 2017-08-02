// Karan Singh
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm.js';
import _ from 'lodash';

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
  render() {
    let { pickerLabelText } = styles;
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit) ;
