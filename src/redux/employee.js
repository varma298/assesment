
export const increment = () => ({
type:'increment'
})

export const decrement = () => ({
    type:'decrement'
    })

const initialState = {
    counter:0,
    employeCount:100,
    employeeList:[
        {id: "12", name: "Rajesh", age: 35, gender:"Male", email:"abcd@g.com", phone:"123456"},
        {id: "13", name: "Ramesh", age: 25, gender:"Male", email:"abcd@g.com", phone:"123456"},
        {id: "14", name: "seenu", age: 25, gender:"Male", email:"abcd@g.com", phone:"123456"},
        {id: "14", name: "kiran", age: 25, gender:"Male", email:"abcd@g.com", phone:"123456"},
        {id: "15", name: "sridhar", age: 25, gender:"Male", email:"abcd@g.com", phone:"123456"},
        {id: "16", name: "rupesh", age: 25, gender:"Male", email:"abcd@g.com", phone:"123456"},
 
    ]
}

export default (state=initialState,action) => {

    switch(action.type){
        case 'increment':
            return {...state, counter:state.counter+1};
        case 'decrement':
            return;
        default:
            return state;

    }

}