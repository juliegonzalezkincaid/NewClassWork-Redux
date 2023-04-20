import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios'

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();

    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store =>store.minutes);
    const miles = useSelector(store => store.miles);

    const sendToServer =() => {
        axios.post('/activity', {
            name: personName,
            type: activityType,
            minutes: minutes,
            miles: miles,
        }).then(response => {
            //Clear inputs
            dispatch({type: 'CLEAR_FORM'});
            //Navigate to the list view
            history.push('/activity-list');
        }).catch(error => {
            alert('something went wrong please try again later');
            console.log(error);
        })
    }


    return(
        <>
        <h3>Review</h3>
        <div> Name:
            {personName}
        </div>
        <div>Type:{activityType}</div>
        
        <div>Minutes:{minutes}</div>
        <div>Miles:{miles}</div>
        <button onClick={sendToServer}>Submit</button>
   </>
    )
    
}
export default Review;