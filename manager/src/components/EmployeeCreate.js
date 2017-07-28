// Karan Singh
import React, { Component } from 'react';
import { Card, CardSection, FormInput, Button } from './common';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {
  render() {
    // let { container } = styles;
    return (
      <Card>
        <CardSection>
          <FormInput
            label="Name"
            placeholder="Jane Doe"
          />
        </CardSection>

        <CardSection>
          <FormInput
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>
          <FormInput
            label="E-mail"
            placeholder="google@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Button onPress={()=>console.log('boop')}>
            Create
          </Button>
        </CardSection>
        
        <CardSection>

        </CardSection>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#2c3e50'
//   },
// });

export default EmployeeCreate ;
