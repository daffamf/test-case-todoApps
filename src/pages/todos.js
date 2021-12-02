import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../redux/reducer'
import './todos.css'


const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}
const mapDispatchToProps = (dispatch => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
})

const Todos = (props) => {


    const [todo, setTodo] = useState('')

    const handelChange = (e) => {
        setTodo(e.target.value)
    }


    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };



    return (
        <div className='container'>
            <div className='addTodos'>
                <input
                    onChange={(e) => handelChange(e)}
                    type="text"
                    className="todo-input"
                    value={todo}

                />
                <button className='add-btn' onClick={() => add()}
                >+</button>


            </div>
            <ul className='container complated' >
                {
                    props.todos.map((item) => {
                        return <li className='card'>{item.item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
