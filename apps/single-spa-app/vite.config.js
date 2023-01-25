import vue from "@vitejs/plugin-vue";

export default {
  server: {
    port: 3000,
  },
  rollupOptions: {
    input: "src/main.js",
    format: "system",
    preserveEntrySignatures: true,
  },
  base: "http://localhost:3000",
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: "http://localhost:3000/src",
        },
      },
    }),
  ],
};
