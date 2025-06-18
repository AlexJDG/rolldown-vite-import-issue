import timezones from "timezones-list";

console.log("Bundler: ", import.meta.env.VITE_BUNDLER);
console.log("Array.isArray: ", Array.isArray(timezones));
console.log("__proto__: ", timezones.__proto__);
console.log("Spread: ", [...timezones].slice());
console.log("Original: ", timezones.slice());