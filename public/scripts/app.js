const app = {
    title: 'Indecision App',
    subtitle: 'Put your destiny in the hands of a computer',
    options: ['Item One', 'Item Two']
};

const template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

let count = 0;
const addOne = () => {
    count++;
    console.log(count);
};

const minusOne = () => {
    count--;
    console.log(count);
};

const resetToZero = () => {
    count = 0;
    console.log(count);
};

const templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetToZero },
        'Reset'
    )
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
