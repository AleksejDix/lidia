<<<<<<< Updated upstream =======
<script setup lang="ts">
import {
  Accordion,
  AccordionPanel,
  AccordionContent,
  AccordionButton
} from '@/components/Accordion'
import { Badge } from '@/components/Badge'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'
import {
  Menu,
  MenuSeparator,
  MenuLink,
  MenuButton,
  MenuRouterLink,
  MenuCheckbox
} from '@/components/Menu'
import { Flex, FlexItem } from '@/layout/Flex'

function log(event: Event) {
  console.log(event)
}
</script>

>>>>>>> Stashed changes
<template>
  <h1>Accordion</h1>

  <!-- <section>
    <header>
      <h1>Disclosure</h1>
    </header>

    <AccordionPanel>
      <AccordionButton>Dislosure</AccordionButton>
      <AccordionContent>Dislosure Content</AccordionContent>
    </AccordionPanel>
  </section> -->

  <section>
    <header>
      <h1>Accordion Single</h1>
    </header>

    <Accordion>
      <AccordionPanel>
        <AccordionButton class="bg-red-400">AccordionButton 1</AccordionButton>
        <AccordionContent>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionButton class="bg-green-400">AccordionButton 2</AccordionButton>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionButton>AccordionButton 2</AccordionButton>
        <AccordionContent>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </section>

  <section>
    <header>
      <h1>Accordion Multiple</h1>
    </header>

    <Accordion multiple>
      <AccordionPanel>
        <AccordionButton>AccordionButton 1</AccordionButton>
        <AccordionContent>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionButton>AccordionButton 2</AccordionButton>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi quibusdam impedit
            error ducimus? Fuga ad dolorum voluptates sint harum quam. Consequatur molestiae ab,
            molestias velit facere distinctio esse? Ab!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionButton>AccordionButton 2</AccordionButton>
        <AccordionContent>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionPanel,
  AccordionContent,
  AccordionButton
} from '@/components/Accordion'

function log(event: Event) {
  console.log(event)
}
</script>
