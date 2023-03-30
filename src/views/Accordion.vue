<template>
  <h1>Accordion</h1>

  <section>
    <header>
      <h1>Disclosure</h1>
    </header>

    <Disclosure>
      <DisclosureButton>Dislosure</DisclosureButton>
      <DisclosurePanel>Dislosure Content</DisclosurePanel>
    </Disclosure>
  </section>

  <section>
    <header>
      <h1>Accordion Single</h1>
    </header>

    <Accordion>
      <Disclosure>
        <DisclosureButton class="bg-red-400">DisclosureButton 1</DisclosureButton>
        <DisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton class="bg-green-400">DisclosureButton 2</DisclosureButton>
        <DisclosurePanel>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>DisclosureButton 2</DisclosureButton>
        <DisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
  </section>

  <section>
    <header>
      <h1>Accordion Multiple</h1>
    </header>

    <Accordion multiple>
      <Disclosure>
        <DisclosureButton>DisclosureButton 1</DisclosureButton>
        <DisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton>DisclosureButton 2</DisclosureButton>
        <DisclosurePanel>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>DisclosureButton 2</DisclosureButton>
        <DisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import { Accordion } from '@lidia/accordion'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@lidia/disclosure'
</script>
