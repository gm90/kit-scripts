// Shortcut: command option k
// Menu: Kill Notifications
// Description: Kill pesky mac os notifications inspired by 240px-invisible-pixels @ https://tyler.io/240-invisible-pixels/
// Author: Gary McCann

const robot = await npm ("robotjs");

const screenSize = robot.getScreenSize();
const xPosition = screenSize.width - 354;
const yPosition = 47;

robot.moveMouse(xPosition, yPosition);

setTimeout(() => {
  robot.mouseClick();
}, 100)
