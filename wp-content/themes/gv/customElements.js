class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<a href="page-1" class="button">Page 1</a>&nbsp;<a href="page-2">Page 2</a>`;
    }
}

customElements.define("x-twosides", TwoSidedMarket);