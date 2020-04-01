class MyTree extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    this.shadow = shadow;
  }

  render() {

    let data = this.getAttribute('data');
    data = JSON.parse(data);
    console.dir(data)
    this.name = data.id;

    const name = document.createElement('h2');
    name.innerHTML = `id: ${this.name}`
    this.shadow.appendChild(name)

    for(let el of data.items) {
      console.log(el)
    }

    data.items.forEach(el => {
      const child = (Array.isArray(el.items) && el.items.length > 0) ? new MyTree() : new MyLeaf()
      child.setAttribute('data', JSON.stringify(el));
      this.shadow.appendChild(child)
    });
  }

  connectedCallback() {
    const style = document.createElement('style');
    const styles = `
      my-tree, my-leaf {
        margin-left: 20px;
        display: block;
      }
    `;

    style.innerHTML = styles;
    this.shadow.appendChild(style)
  }

  static get observedAttributes() { 
    return ['data'];
  }

  attributeChangedCallback() { 
    this.render();
  }
}

customElements.define('my-tree', MyTree);