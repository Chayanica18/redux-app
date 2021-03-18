import {createStore} from 'https://unpkg.com/redux@4.0.5/es/redux.mjs';

const initialState ={
    buttonClicked: "no",
    divVisible:"no"

};

function rootReducer(state = initialState,action)
{
    switch(action.type)
    {
            case "BUTTON_CLICKED":
            return Object.assign({},state,{buttonClicked:'yes'});
            case "DIV_VISIBLE":
                return Object.assign({},state,{divVisible:'yes'});
            default:
                return state;
    }

}

const store =  createStore(rootReducer);

const button = document.getElementById("my_button")
button.addEventListener("click", function() 
{
    const buttonCLickedAction ={
        type:"BUTTON_CLICKED"
    };

    const divVisibleAction ={
        type: "DIV_VISIBLE"
    };

    store.dispatch(buttonCLickedAction);
    store.dispatch(divVisibleAction);
});

store.subscribe(function(){

    if(store.getState().divVisible === "yes")
    {
        const div = document.getElementById("my-div");
        div.style.display ="block";
    }
})