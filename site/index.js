const js = import("./node_modules/@hazone/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});