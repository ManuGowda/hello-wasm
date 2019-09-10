const js = import("./node_modules/@1manugowda/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
