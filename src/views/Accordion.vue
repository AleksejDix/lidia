<template>
  <h1>Accordion</h1>

  <section>
    <header>
      <h2>Disclosure</h2>
    </header>

    <div>
      <p>
        The Disclosure component is typically used when you want to show or hide content based on
        user interaction. This is useful in situations where you have a large amount of content that
        you want to hide by default, in order to reduce clutter or improve page load performance,
        but allow the user to expand and view the content when needed.
      </p>
      <p>
        For example, you might use a Disclosure component to show and hide the details of a product
        on an e-commerce website. The component could display a summary of the product information
        by default, but allow the user to expand and view the full product description,
        specifications, and reviews by clicking on a button or link.
      </p>
      <p>
        The Disclosure component can also be used in combination with other components to create
        more complex user interfaces. For example, you might use the component with a Tabs component
        to display multiple sets of content that can be expanded or collapsed independently.
      </p>
      <p>
        Overall, the Disclosure component is a useful tool for managing the display of content and
        improving the usability of your web application or website. By hiding unnecessary content by
        default and allowing the user to reveal it as needed, you can create a more focused and
        streamlined user experience.
      </p>
    </div>

    <Disclosure>
      <DisclosureButton>Dislosure</DisclosureButton>
      <DisclosurePanel>Dislosure Content</DisclosurePanel>
    </Disclosure>
  </section>

  <section>
    <header>
      <h2>Accordion Single</h2>
    </header>

    <Accordion>
      <AccordionDisclosure>
        <AccordionDisclosureButton class="bg-red-400"
          >AccordionDisclosureButton 1</AccordionDisclosureButton
        >
        <AccordionDisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>

      <AccordionDisclosure>
        <AccordionDisclosureButton class="bg-green-400"
          >AccordionDisclosureButton 2</AccordionDisclosureButton
        >
        <AccordionDisclosurePanel>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>
      <AccordionDisclosure>
        <AccordionDisclosureButton>AccordionDisclosureButton 2</AccordionDisclosureButton>
        <AccordionDisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>
    </Accordion>
  </section>

  <section>
    <header>
      <h2>Accordion Multiple</h2>
    </header>

    <Accordion multiple>
      <AccordionDisclosure>
        <AccordionDisclosureButton>AccordionDisclosureButton 1</AccordionDisclosureButton>
        <AccordionDisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>

      <AccordionDisclosure>
        <AccordionDisclosureButton>AccordionDisclosureButton 2</AccordionDisclosureButton>
        <AccordionDisclosurePanel>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>
      <AccordionDisclosure>
        <AccordionDisclosureButton>AccordionDisclosureButton 2</AccordionDisclosureButton>
        <AccordionDisclosurePanel>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionDisclosurePanel>
      </AccordionDisclosure>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionDisclosureButton,
  AccordionDisclosure,
  AccordionDisclosurePanel
} from '@aleksejdix/accordion/src'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@aleksejdix/disclosure/src'
</script>

<style>
p {
  line-height: 20px;
  padding-top: 4px;
  color: white;
  font-weight: 400;
  letter-spacing: 0.05em;
}
p + p {
  margin-top: 6px;
}
</style>
