function App(root) {
    const html = document.querySelector(root.el);
    const data = root.data;
    const method = root.method;
    // const clickEvents = document.querySelectorAll('[click]')
    // clickEvents.forEach(clickEvent => {
    //     clickEvent.addEventListener('click', method)
    // })
    var template = document.querySelector(root.el).innerHTML;
    var rendered = Mustache.render(template, data);
    document.querySelector(root.el).innerHTML = rendered;
}
