class PDFHelper {
    options = {
        Secret: 'K0OCZsUCJBJfSLa1',
        StoreFile: true,
        ConversionDelay: 1,
        ViewportWidth: 1600,
        ViewportHeight: 1024,
        LoadLazyContent: true,
        HideElements: '#downloadCV, #attribution, div.navbar-nav.ml-auto'
    }
    baseUrl = new URL("https://v2.convertapi.com/convert/web/to/pdf")

    constructor(targetURL, options = {}) {
        this.options.Url = targetURL;
        Object.entries(options).forEach(e => {
            this.options[e[0]] = e[1];
        })
    }

    async getPDFUrl(){
        const url = this.baseUrl;
        let pdfUrl = '';
        Object.entries(this.options).forEach(e => url.searchParams.set(e[0], e[1]));
        await fetch(url).then(response => response.json()).then(response => {
            pdfUrl = response.Files[0].Url;
        })

        return pdfUrl;
    }
}

export default PDFHelper;