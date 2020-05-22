import React, { Component } from 'react';
import './Task2.scss';
import Item from './Item/Item';



class Task2 extends Component {


    render() {

        console.log(this.props);
        const { addItem, handleChange, removeItem, doneItem, correctItem, handleCorrection } = this.props;
        const { list, message, isDone, isCorrection, correction } = this.props.todo;
        console.log(list);

        return (
            <div className="Task2">
                Double click to change item. Blur to save.
                <div className="list">

                    {list.length > 0 ? list.map((item) =>
                        <Item
                            key={item.id}
                            id={item.id}
                            message={item.message}
                            removeItem={removeItem}
                            isDone={item.isDone}
                            doneItem={doneItem}
                            isCorrection={item.isCorrection}
                            correctItem={correctItem}
                            handleChange={handleChange}
                            correction={correction}
                            handleCorrection={handleCorrection}

                        />


                    ) : null}

                </div>

                <div className="wrap">Task
                    <input className="input"
                        placeholder="What do you need to do?"
                        onChange={e => handleChange(e.target.value)}
                        value={message}
                    />

                    <button className="button"
                        onClick={() => {
                            return (message ?
                                addItem(message) : null)

                        }
                        }


                    >Save item</button>
                </div>


            </div >
        );
    }
}

export default Task2;