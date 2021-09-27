// initialize INITIAL_STATE with "state" object; should be empty
const INITIAL_STATE = {
    /* state will have an id, top, bottom (texts) 

    memes: [
        {
            id: 1, 
            top: '', 
            bottom: ''
        }
    ]

    */ 

    memes: []
    
}

// initialize rootReducer with "state" & "action" as params
const rootReducer = (state=INITIAL_STATE, action) => {
    // switch statement 
    switch(action.type) {
        // case #1 (CREATE) 
        case 'CREATE':
            // returns an object with existing "state" and "action"
            return {
                ...state,
                memes: [
                    ...state.memes, {...action.meme}
                ]
            }

        // case #2 (DELETE)
        case 'DELETE': 
            return {
                ...state, 
                memes: state.memes.filter(meme => meme.id !== action.id)
            }

        // case default 
        default:
            return state 
    }
}

export default rootReducer 