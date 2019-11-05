import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Stepper, Step, StepContent, StepLabel, StepButton, Button, Typography, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Step1 from './Step1';
import Step2 from "./Step2";

const StepIcons = (props) => {
    const icons = {
        1: <SettingsIcon/>,
        2: <GroupAddIcon/>,
        3: <VideoLabelIcon/>,
    };

    return (
        <div>
            {icons[props.icon]}
        </div>
    );
};

const StepPages = (props) => {
    const pages = {
        0: <Step1/>,
        1: <Step2/>,
    };

    return (
        <div>{pages[props.step]}</div>
    );
};

function App() {
    const [activeStep, setActiveStep] = React.useState(0);

    const goToNextStep = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    };

    const goTobackStep = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    };

    return (
        <div className="App">
            <StepPages step={activeStep}/>

            <Stepper alternativeLabel activeStep={activeStep}>
                <Step key={'1'}>
                    <StepLabel>
                        <div>
                            <Button
                                onClick={goToNextStep}
                            >
                                Next
                            </Button>
                        </div>
                    </StepLabel>
                </Step>
                <Step key={'Step2'}>
                    <StepLabel>
                        <div>
                            <Button
                                onClick={goTobackStep}
                            >
                                Back
                            </Button>
                        </div>
                    </StepLabel>
                </Step>
            </Stepper>
        </div>
    );
}

export default App;
