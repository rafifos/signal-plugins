/*
 * Created on Tue Mar 18 2025
 * Last updated on Wed Mar 19 2025
 *
 * Author: Rafael "rafifos" Julio <development@rafifos.dev>
 * Version: v2.0.1
 *
 * Initially based on the Leobog Hi75 plugin maintained by the Nollie community at https://github.com/NollieL/SignalRgb_CN_Key/blob/20be9ea0a5a8d1f15c80b2df6d0c7d731ae6a4c0/Leobog%20Hi75.js
 * Later rebased against SignalRGB's SinoWealth plugin.
 *
 * Changelog:
 *
 * v1.0.0
 * - Initial release
 *
 * v1.1.0
 * - Improve documentation on `vKeyPositions`
 * - Remove `ControllableParameters`, will be re-added in the future
 * - Update device image to follow SignalRGB's image guidelines
 *
 * v1.1.1
 * - Improve endpoint validation
 *
 * v2.0.0
 * - Rebase against upstream SinoWealth plugin.
 * - Improves LedPositions to be more accurate.
 * - Bring back `ControllableParameters` to allow user customization.
 *
 * v2.0.1
 * - Add Right Alt mappings
 * - Center Space between it's neighboring keys
 */

/**
 * Exports the type of device for SignalRGB to detect.
 * @returns {string} The type of device.
 */
export function DeviceType() {
  return "keyboard";
}

/**
 * Exports the device's name to be displayed in SignalRGB.
 *
 * @returns {string} The name of the device.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#name-and-publisher}
 */
export function Name() {
  return "AdamantiuN Akira";
}

/**
 * Exports the publisher's name to be displayed in SignalRGB.
 *
 * @returns {string} The name of the publisher.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#name-and-publisher}
 */
export function Publisher() {
  return "Rafael Julio Lemos Silva";
}

/**
 * Exports the device's documentation URL for troubleshooting and support.
 *
 * @returns {string} The URL of the documentation page.
 */
export function Documentation() {
  return "troubleshooting/sinowealth";
}

/**
 * Exports the device's vendor ID used by SignalRGB to search for and detect the device.
 * This must match the exact USB vendor ID of your device for proper detection.
 *
 * @returns {number} The vendor ID in hexadecimal format.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#vendorid-and-productid}
 */
export function VendorId() {
  return 0x258a;
}

/**
 * Exports the device's product ID used by SignalRGB to search for and detect the device.
 * This must match the exact USB product ID of your device for proper detection.
 *
 * @returns {number} The product ID in hexadecimal format.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#vendorid-and-productid}
 */
export function ProductId() {
  return 0x010c;
}

/**
 * Defines the base size of the device's box on the canvas before any scaling is applied.
 * Returns a 2D integer-only array representing width and height.
 * The plugin cannot grab colors outside of these bounds, so the size must
 * accommodate the width and height of all the device's LEDs when translated to a grid.
 *
 * @returns {number[]} A two-element array [width, height] representing the device dimensions.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#size-and-positioning}
 */
export function Size() {
  return [15, 6];
}

/**
 * Sets the device's default position before any user customization.
 * Returns the 2D coordinates of the top left corner of the device on the canvas.
 *
 * @returns {number[]} A two-element array [x, y] representing the position coordinates.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#size-and-positioning}
 */
export function DefaultPosition() {
  return [0, 0];
}

/**
 * Sets the device's default scaling factor before any user customization.
 * Returns the scaling multiplier that will be applied to the base size.
 *
 * @returns {number} A scaling value between 1.0 and 30.0.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#size-and-positioning}
 */
export function DefaultScale() {
  return 1.0;
}

/**
 * Array of LED indices for the Akira plugin.
 * Represents specific LED positions to be controlled in a predefined pattern.
 * Contains 79 unique index values ranging from 0 to 89.
 * @type {number[]}
 * @constant
 */
const vLeds = [
  0, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 1, 7, 13, 19, 25, 31, 37,
  43, 49, 55, 61, 67, 73, 79, 85, 2, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68,
  74, 80, 86, 3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 81, 87, 4, 10, 16,
  22, 28, 34, 40, 46, 52, 58, 64, 70, 82, 88, 5, 11, 17, 35, 53, 59, 65, 77, 83,
  89,
];

/**
 * An array containing the names of all keyboard LEDs/keys for the Akira keyboard.
 * This array represents the physical layout of keys that can be individually
 * controlled for lighting effects.
 *
 * @type {string[]}
 * @constant
 */
const vLedNames = [
  "Esc",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-_",
  "=+",
  "Backspace",
  "Del",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "Page Up",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Page Down",
  "Left Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "Right Shift",
  "Up Arrow",
  "End",
  "Left Ctrl",
  "Left Win",
  "Left Alt",
  "Space",
  "Right Alt",
  "Fn",
  "Right Ctrl",
  "Left Arrow",
  "Down Arrow",
  "Right Arrow",
];

/**
 * Exports an array of LED names for the device.
 *
 * This function returns the names of all LEDs on the keyboard. These names should follow
 * the SignalRGB Supported Key Names documentation to properly support keypress effects
 * and LED painting features.
 *
 * @returns {string[]} An array of LED names corresponding to each key on the device.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#led-names}
 */
export function LedNames() {
  return vLedNames;
}

/**
 * Array of LED positions on a 2D grid.
 * Each position is represented as a [x, y] coordinate pair.
 *
 * @type {Array<Array<number>>} - Array of [x, y] coordinate pairs
 */
const vLedPositions = [
  [0, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
  [13, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [6, 1],
  [7, 1],
  [8, 1],
  [9, 1],
  [10, 1],
  [11, 1],
  [12, 1],
  [13, 1],
  [14, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [8, 2],
  [9, 2],
  [10, 2],
  [11, 2],
  [12, 2],
  [13, 2],
  [14, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 3],
  [9, 3],
  [10, 3],
  [11, 3],
  [13, 3],
  [14, 3],
  [0, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [8, 4],
  [9, 4],
  [10, 4],
  [11, 4],
  [12, 4],
  [13, 4],
  [14, 4],
  [0, 5],
  [1, 5],
  [2, 5],
  [5, 5],
  [8, 5],
  [9, 5],
  [10, 5],
  [12, 5],
  [13, 5],
  [14, 5],
];

/**
 * Exports the coordinates of each LED within the device's pixel buffer.
 *
 * This function returns a matrix defining the X,Y coordinates for each LED on the device.
 * These positions are used by SignalRGB to map colors from the canvas to physical LEDs.
 * All positions must be within the bounds defined by the `Size()` export (`[18, 7]`).
 *
 * @returns {number[][]} A 2D array of [x, y] coordinates for each LED position.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#led-positions}
 */
export function LedPositions() {
  return vLedPositions;
}

/**
 * Exports the configuration settings that users can modify for this device.
 *
 * This function returns an array of configuration objects that define all user-controllable
 * settings for the device plugin. Each object specifies properties like the setting name,
 * type, default value, and UI display options. These settings appear in the SignalRGB
 * interface and allow users to customize device behavior.
 *
 * @returns {Object[]} An array of configuration objects defining user-adjustable settings.
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#controllableparameters} For the parameter schema documentation
 */
export function ControllableParameters() {
  return [
    {
      property: "shutdownColor",
      group: "lighting",
      label: "Shutdown Color",
      description:
        "This color is applied to the device when the System, or SignalRGB is shutting down",
      min: "0",
      max: "360",
      type: "color",
      default: "#000000",
    },
    {
      property: "LightingMode",
      group: "lighting",
      label: "Lighting Mode",
      description:
        "Determines where the device's RGB comes from. Canvas will pull from the active Effect, while Forced will override it to a specific color",
      type: "combobox",
      values: ["Canvas", "Forced"],
      default: "Canvas",
    },
    {
      property: "forcedColor",
      group: "lighting",
      label: "Forced Color",
      description: "The color used when 'Forced' Lighting Mode is enabled",
      min: "0",
      max: "360",
      type: "color",
      default: "#009bde",
    },
  ];
}

/**
 * Determines which USB endpoints SignalRGB will use for communicating with the device.
 *
 * This function evaluates each USB endpoint against specific criteria to determine
 * if it should be used for device communication. SignalRGB calls this function for each
 * available endpoint on the device, and endpoints that return true will be available
 * for use. This allows fallback options if endpoint configurations vary between device revisions.
 *
 * Note: Commands will typically need to be sent to a specific endpoint. Commands sent to an
 * endpoint that is configured by the device to take in a certain report id or length with throw
 * errors if those values don't match.
 *
 * Note: Not all devices will use consistent endpoints depending on where and when the device was
 * made. Validating multiple endpoints lets you automatically fallback if needed.
 *
 * @param {Object} endpoint - The USB endpoint object containing its properties
 * @param {number} endpoint.interface - The endpoint interface number
 * @param {number} endpoint.usage - The endpoint usage identifier
 * @param {number} endpoint.usage_page - The endpoint usage page
 * @param {number} [endpoint.collection] - The endpoint collection (if applicable)
 * @returns {boolean} True if the endpoint should be used, false otherwise
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#validate}
 */
export function Validate(endpoint) {
  return (
    endpoint.interface === 1 &&
    endpoint.usage === 0x0001 &&
    endpoint.usage_page === 0xff00 &&
    endpoint.collection === 0x0006
  );
}

/**
 * Exports a list of executable names that conflict with this device plugin.
 *
 * SignalRGB will not initialize the plugin while any of these processes are running.
 * The plugin will only be initialized when all conflicting processes are closed or
 * when the user explicitly bypasses the error message. The executable names must
 * match the running process names exactly.
 *
 * @returns {string[]} An array of conflicting executable names
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#conflictingprocesses}
 */
export function ConflictingProcesses() {
  return ["OemDrv.exe"];
}

/**
 * Performs initial setup when the device connects or streaming is enabled.
 *
 * This function runs once when a device is first connected, reconnected, or when
 * the streaming toggle is enabled in the device's configuration page. It handles
 * any necessary startup tasks for the device. If any conflicting processes are
 * running (as defined in ConflictingProcesses()), initialization will wait until
 * those processes are closed or the user bypasses the check.
 *
 * @returns {void}
 * @see {@link https://docs.signalrgb.com/plugins/runtime#initialize}
 */
export function Initialize() {}

/**
 * Core rendering function that executes on every frame of the SignalRGB animation loop.
 *
 * This function is called approximately every 30ms as part of SignalRGB's render cycle.
 * It's responsible for sending updated color information to the device on each frame.
 *
 * The execution sequence for each frame is:
 *
 * 1. User settings are updated
 * 2. Colors are grabbed for the device's pixel buffer
 * 3. onChange callbacks are called in order
 * 4. This Render function is called
 *
 * In this implementation, it calls sendColors() to update the device's LEDs.
 *
 * @returns {void}
 * @see {@link https://docs.signalrgb.com/plugins/runtime#render-loop}
 */
export function Render() {
  sendColors();
}

/**
 * Performs cleanup actions when SignalRGB exits or streaming is disabled.
 *
 * This function is called when SignalRGB exits gracefully or when the streaming
 * toggle is disabled in the device's configuration page. It's responsible for
 * returning the device to its hardware control mode and applying any shutdown
 * colors or effects as configured by the user.
 *
 * @param {boolean} SystemSuspending - Indicates if the system is suspending
 * @returns {void}
 * @see {@link https://docs.signalrgb.com/plugins/plugin-exports#shutdown}
 */
export function Shutdown(SystemSuspending) {
  const color = SystemSuspending ? "#000000" : shutdownColor;
  sendColors(color);
}

/**
 * Sends RGB color data to the LEDs, optionally overriding with a specific
 * color.
 *
 * @param {string} [overrideColor] - Optional hex color string (e.g., "#FF00FF")
 * to override all LED colors. If not provided, the function uses the current
 * lighting mode and device color data.
 */
function sendColors(overrideColor) {
  const RGBData = [];

  for (let iIdx = 0; iIdx < vLeds.length; iIdx++) {
    const iPxX = vLedPositions[iIdx][0];
    const iPxY = vLedPositions[iIdx][1];

    let color;

    if (overrideColor) {
      color = hexToRgb(overrideColor);
    } else if (LightingMode === "Forced") {
      color = hexToRgb(forcedColor);
    } else {
      color = device.color(iPxX, iPxY);
    }

    RGBData[vLeds[iIdx] * 3] = color[0];
    RGBData[vLeds[iIdx] * 3 + 1] = color[1];
    RGBData[vLeds[iIdx] * 3 + 2] = color[2];
  }

  writeRGBPackage(RGBData);
}

/**
 * Writes RGB data package to the device by sending a formatted packet.
 *
 * @param {Array<number>} data - The RGB data to be appended to the packet
 * @example
 * writeRGBPackage([0x01, 0x02, 0x03]); // Sends a packet with RGB data
 */
function writeRGBPackage(data) {
  let packet = [0x06, 0x08, 0x00, 0x00, 0x01, 0x00, 0x7a, 0x01];

  packet = packet.concat(data);

  device.send_report(packet, 520);
  device.pause(1);
}

/**
 * Returns the device's image URL string. The Standard plugin image size is
 * 1024x1024 image size with a live area of 920x920.
 * @returns {string} The URL of the device image
 */
export function ImageUrl() {
  return "https://assets.signalrgb.com/devices/brands/leobog/keyboards/hi75.png";
}

/**
 * Converts a hex color string to an array of RGB values.
 * @param {string} hex - The hex color string (e.g., "#ff5733").
 * @returns {number[]} An array containing the RGB values [R, G, B].
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const colors = [];

  colors[0] = Number.parseInt(result[1], 16);
  colors[1] = Number.parseInt(result[2], 16);
  colors[2] = Number.parseInt(result[3], 16);

  return colors;
}
