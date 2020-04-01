class MyLeaf extends HTMLElement {
  constructor () {
    super();
  }

  render() {

    let data = this.getAttribute('data');
    data = JSON.parse(data);
    this.name = data.id;

    const child = document.createElement('div');
    child.innerHTML = `<h3>id: ${this.name}</h3>`

    this.appendChild(child)
  }

  static get observedAttributes() { 
    return ['data'];
  }

  attributeChangedCallback() { 
    this.render();
  }
}

customElements.define('my-leaf', MyLeaf);