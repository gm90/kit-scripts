// Shortcut: command option k
// Menu: Kill Notification
// Description: Kill pesky mac os notification inspired by 240px https://tyler.io/240-invisible-pixels/
// Author: Gary McCann

const robot = await npm ("robotjs");

const mousePosition = robot.getMousePos();
const screen = robot.getScreenSize();

robot.moveMouse(screen.width - 354, 47);

setTimeout(() => {
  robot.mouseClick();
  robot.moveMouse(mousePosition.x, mousePosition.y);
}, 100);
