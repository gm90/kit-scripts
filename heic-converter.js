// Menu: HEIC Converter
// Description: Convert the currently selected heic file to either jpeg or png
// Author: Gary McCann

const { getSelectedFile } = await kit("file");
const { promises: fs } = await npm("fs");
const path = await npm("path");
const convert = await npm("heic-convert");

const imagePath = await getSelectedFile();
const { dir, name: imageName, ext } = path.parse(imagePath);

if (ext.toUpperCase() !== ".HEIC") {
  show(
    `${ext.toUpperCase()} Script is explicitely for files in the .HEIC format`
  );
} else {
  let format = await arg("Which format would you like to convert to:", [
    "JPEG",
    "PNG",
  ]);

  const updatedFileName = `${imageName}.${format}`;
  const updatedFilePath = `${dir}/${updatedFileName}`;

  setHint(`Converting ${imageName}${ext} to ${updatedFileName}`);

  const buffer = await fs.readFile(imagePath);
  const outputBuffer = await convert({
    buffer,
    format,
    quality: 1,
  });

  await fs.writeFile(updatedFilePath, outputBuffer);
}
