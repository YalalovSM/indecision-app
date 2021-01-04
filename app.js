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
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)