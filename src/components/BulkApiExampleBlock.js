import React from 'react'

export default props => {
  const samples = props.samples;
  const json = samples.find(s => s.filename === "json.md");
  const yaml = samples.find(s => s.filename === "yaml.md");
  const handler = function(e) {
    const div = e.target.closest('div');
    const targetClass = div.className === "json" ? "yaml" : "json";
    const parentDiv = div.parentNode;
    const showDiv = parentDiv.querySelector(`.${targetClass}`);
    div.style.display = "none";
    showDiv.style.display = "block";
  };
  return (
    <div>
      <div class="json">
        <button disabled>JSON</button> <button onClick={handler}>YAML</button>
        <div dangerouslySetInnerHTML={{ __html: json.html }} />
       </div>
      <div class="yaml">
        <button onClick={handler}>JSON</button> <button disabled>YAML</button>
        <div dangerouslySetInnerHTML={{ __html: yaml.html }} />
      </div>
    </div>
  )
}
