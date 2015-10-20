export default function popup() {
  var div = document.createElement('div');
  div.innerHTML = '<h2>The popup</h2><p>The popup message</div>';
  document.body.appendChild(div);
}
