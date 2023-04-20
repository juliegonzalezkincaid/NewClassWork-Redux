import { useSelector, useDispatch  } from 'react-redux';
import { useHistory } from 'react-router';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
//step four collects user input for miles

function StepFour () {
    //allows us to send data to redux
    //goes out
    const dispatch =useDispatch();

    //allows us to navagate to the next page
    const history = useHistory();

    //miles data coming from redux
    //comes in 
    const miles = useSelector(store => store.
        miles);

    //on inpurt change, send the new value to redux    
const handleChange = (e) => {
    const action = {type:'SET_ACTIVITY_MILES', payload: event.target.value};
    dispatch(action)
}

const nextPage =(event) => {
    event.preventDefault();
    if (miles > 0) {
        history.push('/review')
    } else {
        alert('Please enter a value greater than 0.');
    }
}
    return(
        <>
        <ProgressBar currentStep={3} />
        <h3>StepFour</h3>
        <form onSubmit={nextPage}>
            <label htmlFor="miles">Miles</label><br />
            <input value={miles} onChange={handleChange} type="number" />
            <input type="submit" value="Next" />
        </form>
        </>
    )
}
export default StepFour;