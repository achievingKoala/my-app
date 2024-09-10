function HelloWorld() {
    return <h2>hello world</h2>;
}

function HelloName() {
    return <h2>hello name</h2>;
}

function HelloVar(props) {
    return <h2>name is  {props.name}</h2>;
}

var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};

const element1 = 
<div style = {myStyle}>
    <h3>h3</h3> 
    <h3>h2</h3>
    <HelloName></HelloName>
    <HelloVar name="ok"></HelloVar>
    </div>;
// const element2 = ;

function TestJSX() {
    return element1;
}

export  {HelloWorld, HelloName, HelloVar, TestJSX };
