import { resolve } from "node:path";
import { defineConfig } from "vite";
import typescript2 from "rollup-plugin-typescript2";

export default defineConfig({
    build: {
        lib: {
            entry: resolve("src", "./index.ts"),
            name: "Tester",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format}.js`,
        },
    },
    plugins: [{ ...typescript2(), apply: "build" }],
});
