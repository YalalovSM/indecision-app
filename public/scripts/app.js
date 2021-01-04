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
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
