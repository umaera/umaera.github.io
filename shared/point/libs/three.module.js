// Three.js ES6 Module Wrapper
// This file loads the Three.js library and exports it as an ES6 module

import './three.min.js';

// Export Three.js from the global scope
export * from './three.min.js';
export { THREE as default } from './three.min.js';

// For compatibility, also export the global THREE object
window.THREE = window.THREE || THREE;
