import UserLocationForm from './UserLocationForm';
import ResultBranches from './ResultBranches';
import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import locationsArray from './data.json';


/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    userLocation:'',
    locations:[]
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  componentDidMount = () =>{
    this.setState({locations : locationsArray })
  }

  handleLocationForm = (place) => {
    console.log(place)
    this.setState({userLocation:place})
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Hello - Click NEXT to search for the closest grocery stroe';
      case 1:
        return <UserLocationForm handleLocationForm={this.handleLocationForm}/>;
      case 2:
        return <ResultBranches locations={this.state.locations} userLocation={this.state.userLocation}/>;
      default:
        return 'Have a great day!';
    }
  }

  render() {
    console.log(this.state)
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Lets start</StepLabel>
          </Step>
          <Step>
            <StepLabel>Enter your location</StepLabel>
          </Step>
          <Step>
            <StepLabel>Close by grocery stores</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
