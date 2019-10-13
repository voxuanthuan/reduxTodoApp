import React from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  updateInput = input => {
    this.setState({
      input
    })
  }

  handleAddTodo = () => {
    if (this.state.input === '') return;
    this.props.addTodo(this.state.input.trim());
    this.setState({ input: '' });
  }

  render() {
    return <div>
      <input
        type="text"
        onChange={e => this.updateInput(e.target.value)}
        value={this.state.input}
      />
      <button onClick={this.handleAddTodo}>Add Todo</button>
    </div>

  }
}

export default connect(null, { addTodo })(AddToDo);
// export default connect(null, toggleTodo)(Todo);