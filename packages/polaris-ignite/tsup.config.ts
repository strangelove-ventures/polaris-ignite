import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  bundle: false, // disable chunking for readability
  clean: !watch,
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  minify: false, // disable minification for readability
  onSuccess: () => process.exit(0), // force exit on success to avoid hanging due to ERR_WORKER_OUT_OF_MEMORY
  tsconfig: "tsconfig.build.json",
}));
