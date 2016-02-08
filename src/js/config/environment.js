const hasConsole = typeof console !== 'undefined';
const hasCollapsedConsole = !!(console.groupCollapsed);
const hasRactive = typeof Ractive !== 'undefined';
const hasWindow = typeof window !== 'undefined';

export { hasConsole, hasCollapsedConsole, hasRactive, hasWindow };