// Karan Singh
import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { Card, CardSection, FormInput, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate} from '../actions';

class EmployeeCreate extends Component {
  onButtonPress (e) {
    const { name, phone, email, shift } = this.props;
    this.props.employeeCreate({ name, phone, email, shift });
  }
  render() {
    // const { name, phone, email, shift } = this.props.employee;
    
    let { pickerLabelText } = styles;
    return (
      <Card>
        <CardSection>
          <FormInput
            label="Name"
            placeholder="Jane Doe"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop:'name' , value })}

          />
        </CardSection>

        <CardSection>
          <FormInput
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop:'phone' , value })}
          />
        </CardSection>

        <CardSection>
          <FormInput
            label="E-mail"
            placeholder="google@gmail.com"
            value={this.props.email}
            onChangeText={value => this.props.employeeUpdate({ prop:'email' , value })}
          />
        </CardSection>
        
        <CardSection style={{ flexDirection: 'column' }} >
          <Text style={pickerLabelText}>Pick a shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop:'shift' , value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate) ;
