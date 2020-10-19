import PDFHelper from './PDFHelper';
import remoteProjects from './remote-projects';
import * as $ from 'jquery';

async function downloadCV() {
    const pdf = new PDFHelper('https://bahadircyildiz.github.io/about/?viewType=wide');
    const pdfUrl = await pdf.getPDFUrl();

    downloadURI(pdfUrl, "BahadirCanYildizCV.pdf");
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}

function checkViewType(){
    var url = new URL(window.location.href);
    var viewType = url.searchParams.get("viewType");

    if (viewType === 'wide') {
        $('main').removeClass('container');
        $('main').addClass('container-fluid');
    }
}

window.get_tools = remoteProjects.get_tools;
window.parse_tools = remoteProjects.parse_tools;
window.downloadCV = downloadCV;
window.$ = $;

window.onload = function (){
    checkViewType();
}