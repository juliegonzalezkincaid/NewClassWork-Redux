import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Review'
];

function ProgressBar({ currentStep }) {

    return (
        <Stepper sx= {{ marginTop: '20px'}} activeStep={currentStep}>
            {
                steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))
            }
        </Stepper>
    )
}

export default ProgressBar;