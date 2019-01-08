const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  opinion: true
};

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');

debateElement.innerHTML = compiledHtml;