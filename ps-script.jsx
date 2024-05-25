#target photoshop

// Function to replace the contents of the smart object
function replaceSmartObjectContent(newContentFile) {
    try {
        var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
        var desc = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        desc.putPath(idnull, new File(newContentFile));
        var idPgNm = charIDToTypeID("PgNm");
        desc.putInteger(idPgNm, 1);
        executeAction(idplacedLayerReplaceContents, desc, DialogModes.NO);
    } catch (e) {
        alert("Error replacing smart object content: " + e.message + "\n\nScript by Aman Sharma");
        return false;
    }
    return true;
}

// Function to find the smart object layer recursively
function findSmartObjectLayer(layerSet) {
    for (var i = 0; i < layerSet.layers.length; i++) {
        var layer = layerSet.layers[i];
        if (layer.kind == LayerKind.SMARTOBJECT) {
            return layer;
        } else if (layer.typename == "LayerSet") { // if the layer is a group
            var foundLayer = findSmartObjectLayer(layer);
            if (foundLayer) return foundLayer;
        }
    }
    return null;
}

// Function to open the smart object for editing using an action
function openSmartObject() {
    try {
        var idedit = stringIDToTypeID("placedLayerEditContents");
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        var idplacedLayer = stringIDToTypeID("placedLayer");
        ref.putEnumerated(idplacedLayer, idplacedLayer, idplacedLayer);
        desc.putReference(charIDToTypeID("null"), ref);
        executeAction(idedit, desc, DialogModes.NO);
    } catch (e) {
        alert("Error opening smart object: " + e.message + "\n\nScript by Aman Sharma");
        return false;
    }
    return true;
}

// Function to fit the smart object content to the full width of the document while centering it
function fitContentToFullWidth(smartObjectDoc) {
    try {
        var docWidth = smartObjectDoc.width;
        var docHeight = smartObjectDoc.height;
        var contentWidth = smartObjectDoc.activeLayer.bounds[2] - smartObjectDoc.activeLayer.bounds[0];
        var contentHeight = smartObjectDoc.activeLayer.bounds[3] - smartObjectDoc.activeLayer.bounds[1];

        var scaleFactor = docWidth / contentWidth * 100;
        var newHeight = (contentHeight * scaleFactor) / 100;

        if (newHeight > docHeight) {
            // If the new height exceeds the document height, calculate scale factor based on height instead
            scaleFactor = docHeight / contentHeight * 100;
            var newWidth = (contentWidth * scaleFactor) / 100;
            smartObjectDoc.activeLayer.resize(newWidth, newHeight, AnchorPosition.MIDDLECENTER);
        } else {
            smartObjectDoc.activeLayer.resize(scaleFactor, scaleFactor, AnchorPosition.MIDDLECENTER);
        }
    } catch (e) {
        alert("Error fitting content to full width: " + e.message + "\n\nScript by Aman Sharma");
        return false;
    }
    return true;
}


// Function to save the document as JPEG
function saveDocumentAsJPEG(doc, outputFileName) {
    try {
        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        doc.saveAs(new File(outputFileName), jpegOptions, true, Extension.LOWERCASE);
    } catch (e) {
        alert("Error saving document as JPEG: " + e.message + "\n\nScript by Aman Sharma");
        return false;
    }
    return true;
}

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
        alert("Error opening PDF file: " + e.message + "\n\nScript by Aman Sharma");
        return null;
    }
}

// Main function to process the mockup and design files
function processMockups() {
    var mockupFile = File.openDialog("Select the mockup file");
    if (!mockupFile) {
        alert("No mockup file selected.\n\nScript by Aman Sharma");
        return;
    }
    
    var mockupDoc;
    try {
        mockupDoc = app.open(mockupFile);
    } catch (e) {
        alert("Error opening mockup file: " + e.message + "\n\nScript by Aman Sharma");
        return;
    }

    var designFolder = Folder.selectDialog("Select the folder containing design files");
    if (!designFolder) {
        alert("No design folder selected.\n\nScript by Aman Sharma");
        return;
    }

    var designFiles = designFolder.getFiles(/\.(psd|png|jpg|jpeg|pdf)$/i);
    if (designFiles.length === 0) {
        alert("No design files found in the selected folder.\n\nScript by Aman Sharma");
        return;
    }

    var outputFolder = Folder.selectDialog("Select the output folder");
    if (!outputFolder) {
        alert("No output folder selected.\n\nScript by Aman Sharma");
        return;
    }

    for (var i = 0; i < designFiles.length; i++) {
        try {
            var smartObjectLayer = findSmartObjectLayer(mockupDoc);
            if (!smartObjectLayer) {
                alert("No smart object layer found in the mockup file.\n\nScript by Aman Sharma");
                break;
            }

            mockupDoc.activeLayer = smartObjectLayer;

            if (!openSmartObject()) break;

            if (designFiles[i].name.match(/\.pdf$/i)) {
                var pdfDoc = openPDF(designFiles[i]);
                if (!pdfDoc) break;
                pdfDoc.selection.selectAll();
                pdfDoc.selection.copy();
                pdfDoc.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.paste();
                var smartObjectDoc = app.activeDocument;
                if (!fitContentToFullWidth(smartObjectDoc)) break;
            } else {
                if (!replaceSmartObjectContent(designFiles[i])) break;
                var smartObjectDoc = app.activeDocument;
                if (!fitContentToFullWidth(smartObjectDoc)) break;
            }

            smartObjectDoc.close(SaveOptions.SAVECHANGES);

            var outputFileName = outputFolder + "/" + designFiles[i].name.replace(/\.[^\.]+$/, '') + "_mockup.jpg";
            if (!saveDocumentAsJPEG(mockupDoc, outputFileName)) break;
        } catch (e) {
            alert("Error processing design file '" + designFiles[i].name + "': " + e.message + "\n\nScript by Aman Sharma");
            break;
        }
    }

    alert("Mockup export complete!\n\nScript by Aman Sharma");
}

// Run the main function
processMockups();
