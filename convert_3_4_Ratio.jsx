#target photoshop

// Function to process a single image
function processImage(file) {
    var doc = app.open(file);

    // Unlock the background layer if it's locked
    if (doc.backgroundLayer) {
        doc.backgroundLayer.isBackgroundLayer = false;
    }

    // Calculate the new dimensions for 3:4 aspect ratio
    var newWidth = doc.width;
    var newHeight = doc.width * 4 / 3;

    // Resize the canvas to the new dimensions
    doc.resizeCanvas(newWidth, newHeight, AnchorPosition.MIDDLECENTER);

    // Create a new solid color layer (white) and move it below the image
    var whiteLayer = doc.artLayers.add();
    whiteLayer.name = "White Background";
    doc.activeLayer = whiteLayer;
    var color = new SolidColor();
    color.rgb.red = 255;
    color.rgb.green = 255;
    color.rgb.blue = 255;
    app.foregroundColor = color;
    doc.selection.selectAll();
    doc.selection.fill(app.foregroundColor);
    doc.selection.deselect();

    // Move the white layer to the bottom
    whiteLayer.move(doc.artLayers[doc.artLayers.length - 1], ElementPlacement.PLACEAFTER);

    // Resize the image to full HD (1440x1920) to maintain the 3:4 aspect ratio
    doc.resizeImage(1440, 1920);

    // Save the image as JPEG
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 12; // Maximum quality

    var outputFile = new File(outputFolder + "/" + file.name.replace(/\.[^\.]+$/, '') + "_fullhd.jpg");
    doc.saveAs(outputFile, jpegOptions, true);

    // Close the document without saving changes
    doc.close(SaveOptions.DONOTSAVECHANGES);
}

// Function to process multiple images
function processMultipleImages() {
    var inputFolder = Folder.selectDialog("Select a folder with images to process:");
    if (inputFolder) {
        outputFolder = Folder.selectDialog("Select a folder to save the processed images:");
        if (outputFolder) {
            var files = inputFolder.getFiles(/\.(jpg|jpeg|png|tif|tiff)$/i);
            for (var i = 0; i < files.length; i++) {
                processImage(files[i]);
            }
            alert("Processing completed.");
        } else {
            alert("No output folder selected. Script canceled.");
        }
    } else {
        alert("No input folder selected. Script canceled.");
    }
}

// Run the script
processMultipleImages();
