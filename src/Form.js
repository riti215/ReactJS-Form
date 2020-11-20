import React, { Component } from 'react'
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = 
        { name: "",
          locality: "",
          email: "",
          model: "",
        }
    }
    
    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return (
            <div className="container">
            <h1>Get a Qubi Form</h1>
            <hr></hr>
            <form onSubmit={this.handleSubmit}>
  
              <div className="form-control">
                <label>Name: </label>
                <input type="text" size="20" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Your Name...."/>
              </div>
  
              <div className="form-control">
                <label>Locality: </label>
                <input type="text" size="20" value={this.state.locality} name="locality" onChange={this.handleChange} placeholder="Your Locality...."/>
              </div>
  
              <div className="form-control">
                <label>Email: </label>
                <input type="email" size="20" value={this.state.email} name="email" onChange={this.handleChange} placeholder="Your Email...."/>
              </div>
  
              <div className="form-control">
                <label>Model Required: </label>
                <input type="text" size="20" value={this.state.model} name="model" onChange={this.handleChange} placeholder="Model Required...."/>
              </div>
  
              <div className="form-control">
                <button type="submit">Submit</button>
              </div>
  
            </form>
          </div>
        )
}
}

export default Form;
