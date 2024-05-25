#target photoshop

// Function to open PDF files
function openPDF(pdfFile) {
    try {
        var pdfOpenOptions = new PDFOpenOptions();
        pdfOpenOptions.antiAlias = true;
        pdfOpenOptions.mode = OpenDocumentMode.RGB;
        pdfOpenOptions.bitsPerChannel = BitsPerChannelType.EIGHT;
        pdfOpenOptions.resolution = 300;
        pdfOpenOptions.page = 1;
        pdfOpenOptions.usePageNumber = true;
        return app.open(pdfFile, pdfOpenOptions);
    } catch (e) {
        alert("Error opening PDF file: " + e.message);
        return null;
    }
}

// Function to save the document as JPEG
function saveDocumentAsJPEG(doc, outputFolder) {
    try {
        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        var outputFileName = outputFolder + "/" + doc.name.replace(/\.[^\.]+$/, '') + ".jpg";
        doc.saveAs(new File(outputFileName), jpegOptions, true, Extension.LOWERCASE);
        doc.close(SaveOptions.DONOTSAVECHANGES);
    } catch (e) {
        alert("Error saving document as JPEG: " + e.message);
    }
}

// Main function to process PDF files
function processPDFs(inputFolder, outputFolder) {
    var pdfFiles = inputFolder.getFiles("*.pdf");
    if (pdfFiles.length === 0) {
        alert("No PDF files found in the selected folder.");
        return;
    }

    for (var i = 0; i < pdfFiles.length; i++) {
        try {
            var pdfDoc = openPDF(pdfFiles[i]);
            if (!pdfDoc) continue;
            saveDocumentAsJPEG(pdfDoc, outputFolder);
        } catch (e) {
            alert("Error processing PDF file '" + pdfFiles[i].name + "': " + e.message);
        }
    }

    alert("PDF to JPEG conversion complete! \n\nScript by Aman Sharma");
}

// Select input folder containing PDF files
var inputFolder = Folder.selectDialog("Select the folder containing PDF files");
if (!inputFolder) {
    alert("No input folder selected.");
} else {
    // Select output folder for saving JPEG files
    var outputFolder = Folder.selectDialog("Select the output folder");
    if (!outputFolder) {
        alert("No output folder selected.");
    } else {
        // Process PDF files
        processPDFs(inputFolder, outputFolder);
    }
}
