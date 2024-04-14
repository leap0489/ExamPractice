class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


    class DaysLeft extends HTMLElement{
        connectedCallback(){
            let today=new Date();
            let nPiDay=new Date(today.getFullYear(), 2, 14);
            let nSeconds = 1000*60*60*24;
            let nDaysLeft = Math.ceil((nPiDay.getTime()-today.getTime())/(nSeconds));
            console.log(nDaysLeft);
			this.innerHTML=nDaysLeft;
        }
    }
    customElements.define("x-daysleft", DaysLeft);

    class PiDay extends HTMLElement{
        connectedCallback(){
            let today=new Date();
            let nPiDay=new Date(today.getFullYear(), 2, 14);
            this.innerHTML = nPiDay.toLocaleDateString('en-CA');
        }
    }
    customElements.define("x-piday", PiDay);

	class TwoSidedMarket extends HTMLElement{
		connectedCallback(){
			this.innerHTML = `<a href="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
		}
	}

	customElements.define("x-twosides", TwoSidedMarket);