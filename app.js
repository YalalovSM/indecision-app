const app = {
    title: 'Indecision App',
    subtitle: 'Put your destiny in the hands of a computer',
    options: ['Item One', 'Item Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

let count = 0
const addOne = () => {
    count++;
    console.log(count);
}

const minusOne = () => {
    count--;
    console.log(count);
}

const resetToZero = () => {
    count = 0;
    console.log(count);
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetToZero}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
