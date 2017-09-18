import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Pilot Name:
            <input onChange={this.setValue} type="text" value={this.state.value}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
