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

// Function to fit the smart object content to the full width and height of the document
function fitContentToFullWidthAndHeight(smartObjectDoc) {
    try {
        // Ensure the active layer is selected
        smartObjectDoc.activeLayer = smartObjectDoc.layers[0];

        var docWidth = smartObjectDoc.width.as('px');
        var docHeight = smartObjectDoc.height.as('px');
        
        // Resize the smart object layer to fit the full width and height
        smartObjectDoc.resizeImage(UnitValue(docWidth, 'px'), UnitValue(docHeight, 'px'), null, ResampleMethod.BICUBIC);
    } catch (e) {
        alert("Error fitting content to full width and height: " + e.message + "\n\nScript by Aman Sharma");
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

// Function to reset the transformations of the smart object layer
function resetSmartObjectTransformations(layer) {
    try {
        var idTransform = stringIDToTypeID("transform");
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc.putReference(charIDToTypeID("null"), ref);
        var idFreeTransformCenterState = stringIDToTypeID("freeTransformCenterState");
        var idFreeTransformCenter = stringIDToTypeID("freeTransformCenter");
        desc.putEnumerated(idFreeTransformCenterState, idFreeTransformCenter, idFreeTransformCenter);
        desc.putEnumerated(stringIDToTypeID("FTCS"), charIDToTypeID("QCSt"), charIDToTypeID("Qcsa"));
        desc.putBoolean(stringIDToTypeID("adjustPos"), true);
        desc.putUnitDouble(charIDToTypeID("Wdth"), charIDToTypeID("#Prc"), 100.000000);
        desc.putUnitDouble(charIDToTypeID("Hght"), charIDToTypeID("#Prc"), 100.000000);
        executeAction(idTransform, desc, DialogModes.NO);
    } catch (e) {
        alert("Error resetting smart object transformations: " + e.message + "\n\nScript by Aman Sharma");
        return false;
    }
    return true;
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

            // Reset transformations before editing the smart object
            if (!resetSmartObjectTransformations(smartObjectLayer)) break;

            if (!openSmartObject()) break;

            if (designFiles[i].name.match(/\.pdf$/i)) {
                var pdfDoc = openPDF(designFiles[i]);
                if (!pdfDoc) break;
                pdfDoc.selection.selectAll();
                pdfDoc.selection.copy();
                pdfDoc.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.paste();
                var smartObjectDoc = app.activeDocument;
                if (!fitContentToFullWidthAndHeight(smartObjectDoc)) break;
            } else {
                if (!replaceSmartObjectContent(designFiles[i])) break;
                var smartObjectDoc = app.activeDocument;
                if (!fitContentToFullWidthAndHeight(smartObjectDoc)) break;
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
