# Lidia

Lidia is an outstanding component library for modern web applications, inspired by and named after the creator's wife, Lidia, who embodies efficiency and beauty. This powerful library reflects her qualities, providing developers with an exceptional tool to create accessible, efficient, and visually stunning web applications.

Built using cutting-edge technologies like Vue 3 and TypeScript, Lidia offers a seamless, composable, and reusable interface to streamline the development process. Its focus on accessibility ensures that web applications cater to diverse user needs, adhering to the highest usability standards.

The Lidia component library boasts a wide range of customizable components, allowing developers to easily adapt and extend the library to suit their project requirements. Its composable architecture enables effortless mixing and matching of components, which accelerates development and reduces the complexity of crafting modern web applications.

Lidia also leverages Pinia, a lightweight and straightforward state management solution, further enhancing the library's capabilities and improving the overall developer experience.

In summary, the Lidia component library is a powerful tribute to its namesake, reflecting efficiency and beauty in the world of web development. By choosing Lidia for your projects, you'll enjoy a streamlined, accessible, and visually appealing development experience, creating web applications that stand out and make a lasting impression.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
