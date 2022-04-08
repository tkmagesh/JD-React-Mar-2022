import React from 'react';

class Greeter extends React.Component{

    state = {
        message : '[Default greet message]',
        userName : 'Magesh'
    };

    onTxtUserNameChange = (evt) => {
        this.setState({
            userName : evt.target.value
        })
    }

    onBtnGreetClick = (evt) => {
        const msg = `Hi ${this.state.userName}, Have a nice day!`
        this.setState({
            message : msg
        })
    };

    render(){
        return(
            <div>
                <h1>Greeter</h1>
                <hr/>
                <label htmlFor="txtUserName">User Name :</label>
                <input type="text" name="" id="txtUserName" onChange={this.onTxtUserNameChange}/>
                <button onClick={this.onBtnGreetClick}>Greet</button>
                <div className="greetMessage">{this.state.message}</div>
            </div>
        )
    }
}

export default Greeter;