// Karan Singh
import React, { Component } from 'react';
import { Card, Button, CardSection } from './common';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm.js';

class EmployeeCreate extends Component {
  onButtonPress (e) {
    const { name, phone, email, shift } = this.props;
    this.props.employeeCreate({ name, phone, email, shift });
  }
  render() {
    let { pickerLabelText } = styles;
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate) ;
