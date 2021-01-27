const initialState = {
    count : 0,
}
export default function testReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'SET_COUNTER':
            return {
                count: action.oldCounter + 1,
            };
        default:
            return state;
    }
}
