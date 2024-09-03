// First of all we create a format for any new element
const reactElement={
    type: 'a',
    prop:{
        href:"https://google.com",
        target: '_blank'
    },
    text:'Click Me'
}

// Then we make a code block which is to be inserted in the HTMl file. This is done with reference to a code block in the HTML file
const mainContainer = document.getElementById('root')

// function to inject the element in the HTML file in accordance with the react element we created
function injectContainer(mainContainer,reactElement){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.text
    for(const props in reactElement.prop){
        if (props === 'children') continue;
        domElement.setAttribute(props,reactElement.prop[props])
    }
    mainContainer.appendChild(domElement)
}

// Execute the function to inject react element into the container
injectContainer(mainContainer,reactElement)