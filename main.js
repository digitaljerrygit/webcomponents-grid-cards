fetch('./templates/card.html')
    .then(res => res.text())
    .then(res => {
        const parser = new DOMParser();
        const template = parser.parseFromString(res, "text/html").querySelector('template');
        
        class Card extends HTMLElement {
            constructor() {
                super();
            }

            connectedCallback() {
                const shadow = this.attachShadow({ mode: "closed" });
                shadow.appendChild(template.content.cloneNode(true));
            }
        }

        customElements.define('my-card', Card);
    });

