import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
    todos:[ { task: 'Organize Garage', id: 1528817077286, completed: false},
          { task: 'Bake Cookies', id: 1528817084358, completed: false}
          ],
          item: ""
        }
  } //Constructor 

  changeToDoHandler= event =>
    this.setState({[event.target.name]: event.target.value});

  addItem= event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task:this.state.item, id:Date.now(), completed:false});
    this.setState({todos,item:""});
  };

  clearItem= event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos=todos.filter(item => !item.completed);
    this.setState({ todos });
  };

  toggleItem=id => {
    let todos=this.state.todos.slice();
    todos=todos.map(item=> {
    if(item.id===id){
      item.completed=!item.completed;
      return item;
    } else {
      return item;
    }
    });
    this.setState({todos});
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm 
          item={this.state.item} 
          addItem={this.addItem}
          clearItem={this.clearItem}
          changeToDoHandler={this.changeToDoHandler} /> 
        <TodoList 
          items={this.state.todos}
          toggleItem={this.toggleItem}
          />
      </div>
    );
  }
} //App 

export default App;
