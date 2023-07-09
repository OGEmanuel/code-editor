const textarea = document.querySelectorAll('textarea');
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const btnHtml = document.getElementById('tabs-html');
const btnCss = document.getElementById('tabs-css');
const btnJs = document.getElementById('tabs-js');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const onChange = () => {
  let result = document.getElementById('result');

  result.contentDocument.body.innerHTML =
    html.value + '<style>' + css.value + '</style>';
  result.contentWindow.eval(js.value);
};

for (let i = 0; i < textarea.length; i++) {
  const code = textarea[i];
  code.addEventListener('keyup', onChange);
}

if (!btnHtml.classList.contains('hidden')) {
  btnHtml.style.borderColor = '#ff4d00';
}

const switchToHtmlTab = () => {
  one.classList.remove('hidden');
  two.classList.add('hidden');
  three.classList.add('hidden');

  if (!btnHtml.classList.contains('hidden')) {
    btnHtml.style.borderColor = '#ff4d00';
    btnCss.style.borderColor = '#000';
    btnJs.style.borderColor = '#000';
  }
};

btnHtml.addEventListener('click', switchToHtmlTab);

const switchToCssTab = () => {
  one.classList.add('hidden');
  two.classList.remove('hidden');
  three.classList.add('hidden');

  if (!btnCss.classList.contains('hidden')) {
    btnHtml.style.borderColor = '#000';
    btnCss.style.borderColor = '#025cf7';
    btnJs.style.borderColor = '#000';
  }
};

btnCss.addEventListener('click', switchToCssTab);

const switchToJsTab = () => {
  one.classList.add('hidden');
  two.classList.add('hidden');
  three.classList.remove('hidden');

  if (!btnJs.classList.contains('hidden')) {
    btnHtml.style.borderColor = '#000';
    btnCss.style.borderColor = '#000';
    btnJs.style.borderColor = '#eafa05';
  }
};

btnJs.addEventListener('click', switchToJsTab);
