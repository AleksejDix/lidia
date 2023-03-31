# Accordion Component

The Accordion component is a set of Vue.js 3 components using TypeScript and the script setup syntax. It is designed to follow the same style and accessibility standards as the modal component example.

## Components
The Accordion component consists of four sub-components:

- Accordion
- AccordionPanel
- AccordionButton
- AccordionContent

# Accordion

The Accordion component acts as a wrapper for multiple AccordionPanel components.

## usage 

```html
<Accordion>
  <AccordionPanel>
    <AccordionButton>Accordion Button 1</AccordionButton>
    <AccordionContent>Accordion Content 1</AccordionContent>
  </AccordionPanel>
  <AccordionPanel>
    <AccordionButton>Accordion Button 2</AccordionButton>
    <AccordionContent>Accordion Content 2</AccordionContent>
  </AccordionPanel>
</Accordion>
```

# AccordionPanel

The AccordionPanel component is a container for an AccordionButton and AccordionContent component. It controls the visibility of the AccordionContent when the AccordionButton is clicked.

# AccordionButton

The AccordionButton component is used to toggle the visibility of the corresponding AccordionContent component.

# AccordionContent

The AccordionContent component holds the content that is shown or hidden when the corresponding AccordionButton is clicked.

# Usage

To use the Accordion component in your application, you must first import and register the necessary sub-components:

```js
<script lang="ts" setup>
import { Accordion, AccordionPanel, AccordionButton, AccordionContent } from '@/components/Accordion'
</script>

```

