import PDFHelper from './PDFHelper';
import remoteProjects from './remote-projects';
import * as $ from 'jquery';

async function downloadCV() {
    const pdf = new PDFHelper('https://bahadircyildiz.github.io/about/', {CoversionDelay: 1});
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

window.get_tools = remoteProjects.get_tools;
window.parse_tools = remoteProjects.parse_tools;
window.PDFHelper = PDFHelper;
window.downloadCV = downloadCV;
window.$ = $;
