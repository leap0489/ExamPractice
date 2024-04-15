class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<a href="shop" class="mainbutton">Browse listings</a>&nbsp;<a href="job-provider-application" class="mainbutton">List jobs</a>`;
    }
}

customElements.define("x-twosides", TwoSidedMarket);