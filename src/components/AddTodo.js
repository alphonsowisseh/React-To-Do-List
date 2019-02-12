import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({title: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

  render() {
    return (
        <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
          <input type='text' name='title' placeholder='Add To Do...' value={this.state.value} onChange={this.onChange} style={{flex: '10', padding: '5px', border: '1px solid #f4f4f4'}} />
          <input type='submit' value='Submit' className='btn' style={{flex: '1'}} />
        </form>
      )
  }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
