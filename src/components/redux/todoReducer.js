const ADD_ITEM = "ADD-ITEM";
const REMOVE_ITEM = "REMOVE-ITEM";
const DONE_ITEM = "DONE-ITEM";
const CORRECT_ITEM = "CORRECT-ITEM";
const HANDLE_CHANGE = "HANDLE CHANGE";
const HANDLE_CORRECTION = "HANDLE-CORRECTION"

let initialState = {
    message: '',
    correction: '',



    list: [
        {
            id: 0,
            message: "Learn JS",
            isDone: false,
            isCorrection: false,
        },
        {
            id: 1,
            message: "Learn React",
            isDone: false,
            isCorrection: false,
        },
        {
            id: 2,
            message: "Learn Redux",
            isDone: false,
            isCorrection: false,
        }
    ]
};
let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            let newMessage = {
                id: state.list.length,
                message: action.message,
                isDone: false,
                isCorrection: false,
            };
            return {
                ...state,
                message: '',
                list: [...state.list, newMessage]
            }
        }
        case HANDLE_CHANGE: {
            return {
                ...state,
                message: action.message

            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            }

        }
        case DONE_ITEM: {
            return {
                ...state,
                list: state.list.map(item => item.id === action.id ? { ...item, isDone: !item.isDone } : item)
            }
        }
        case CORRECT_ITEM: {

            return {
                ...state,
                // correction: state.message,
                list: state.list.map(item => item.id === action.id ? { ...item, isCorrection: !item.isCorrection } : item)
            }
        }

        case HANDLE_CORRECTION: {
            return {
                ...state,
                list: state.list.map(item => item.id === action.id ? { ...item, message: action.message } : item)
            }
        }
        default:
            return state;
    }

}

export const addItem = (message) => {
    return {
        type: ADD_ITEM,
        message
    }
}

export const handleChange = (message) => {
    return {
        type: HANDLE_CHANGE,
        message
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }

}
export const doneItem = (id) => {
    return {
        type: DONE_ITEM,
        id
    }
}

export const correctItem = (id) => {
    return {
        type: CORRECT_ITEM,

        id
    }
}

export const handleCorrection = (message, id) => {
    return {
        type: HANDLE_CORRECTION,
        message,
        id
    }
}
export default todoReducer;