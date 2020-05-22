import React from 'react';

import './Item.scss';

const Item = (props) => {
    console.log(props);
    return (
        <div className="Item">

            {!props.isCorrection ? (
                <>
                    <div className={props.isDone ? "messageDone" : "message"}
                        onDoubleClick={() => { props.correctItem(props.id) }}
                    >{props.message}</div>

                    <div className="status">
                        <div className="done"
                            onClick={() => { props.doneItem(props.id) }}
                        >V</div>
                        <div className="delete"
                            onClick={() => { props.removeItem(props.id) }}
                        >X</div>

                    </div>
                </>

            ) : (
                    <div className="correction">
                        <input className="correctionInput"
                            value={props.message}
                            onChange={e => { props.handleCorrection(e.target.value, props.id) }}
                            onBlur={() => { props.correctItem(props.id) }}
                            autoFocus
                        />
                    </div>

                )}





        </div >
    );
}

export default Item;