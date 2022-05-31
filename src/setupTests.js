import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import setGlobalVars from 'indexeddbshim';

global.shimNS = true
global.window = global;
setGlobalVars();