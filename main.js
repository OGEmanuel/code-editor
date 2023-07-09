const textarea = document.querySelectorAll('textarea');

const onChange = () => {
  let html = document.getElementById('html').value;
  let css = document.getElementById('css').value;
  let js = document.getElementById('js').value;
  let result = document.getElementById('result');

  result.contentDocument.body.innerHTML = html + '<style>' + css + '</style>';
  result.contentWindow.eval(js);
};

for (let i = 0; i < textarea.length; i++) {
  const code = textarea[i];
  code.addEventListener('keyup', onChange);
}
