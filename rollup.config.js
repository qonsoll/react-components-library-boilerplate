import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import multi from '@rollup/plugin-multi-entry';
import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/index.ts", "src/TestComponent/TestComponent.tsx"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true,
      exports: 'named'
    },
    {
      dir: "build",
      format: "esm",
      sourcemap: true,
      exports: 'named'
    }
  ],
  preserveModules: true,
  plugins: [
    multi(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true, allowNonTsExtensions: true }),
    postcss(),
    terser(),
  ],
};