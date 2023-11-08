import React, { Component } from 'react'

export class ControlledForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="id-name">Your Name</label>
                    <input id="id-name" name="name" type="text" />
                    <input type="Submit" value="Submit" />
                </form>
                
            </div>
        )
    }
}

export default ControlledForm