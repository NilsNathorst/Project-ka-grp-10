import React, { Component, Fragment } from 'react';
import RegistrationForm from '../Components/RegistrationForm';
import RegistrationProgressionCheck from '../Components/RegistrationProgressionCheck';
import ReferAFriend from '../Components/ReferAFriend';

class RegistrationPage extends Component {
    state = {
        progression: "2"
    }

    ChangeCurrentState = (e) => {
        if(this.state.progression ==="1"){
            e.preventDefault()
            this.setState({progression: "2"})
        }
        else if (this.state.progression === "2") {
            e.preventDefault()
            this.setState({ progression: "3" })
        }
    }
    render() {
        return (
            <Fragment>
                 <RegistrationProgressionCheck state={this.state.progression} />
                {
                    this.state.progression === "1"
                    ? <RegistrationForm changeState={this.ChangeCurrentState}/>
                    : <ReferAFriend />
                }

        </Fragment>
    );
}
};

export default RegistrationPage;