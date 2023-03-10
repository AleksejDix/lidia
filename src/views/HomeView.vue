<script setup lang="ts">
import {
  Accordion,
  AccordionPanel,
  AccordionContent,
  AccordionButton
} from '@/components/Accordion'
import { Badge } from '@/components/Badge'
import { Avatar, AvatarGroup } from '@/components/Avatar'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'
</script>

<template>
  <main class="space-y-4">
    <div class="flex">
      <Dropdown>
        <DropdownButton>
          <Avatar :name="`Aleksej Dix`" />
        </DropdownButton>
        <DropdownContent>
          <Accordion>
            <AccordionPanel tag="section">
              <AccordionButton>
                This is awesome
                <Badge>123123</Badge>
              </AccordionButton>
              <AccordionContent>
                <div>Sophia Williams</div>
                <div>sophia.williams@company.com</div>
                <div>(501) 555-9128</div>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel tag="section">
              <AccordionButton>This is awesome</AccordionButton>
              <AccordionContent>
                <div>Sophia Williams</div>
                <div>sophia.williams@company.com</div>
                <div>(501) 555-9128</div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownButton> clicke me </DropdownButton>
        <DropdownContent> wurst </DropdownContent>
      </Dropdown>
    </div>

    <AvatarGroup
      :users="[
        { name: 'Aleksej Dix' },
        { name: 'Lidia Dix' },
        { name: 'Daniel Woo' },
        { name: 'Harry Potter' }
      ]"
    />
    <Badge>1231</Badge>

    <AvatarGroup
      :users="[
        { name: 'Aleksej Dix' },
        { name: 'Lidia Dix' },
        { name: 'Daniel Woo' },
        { name: 'Harry Potter' }
      ]"
    />

    <Badge>1231</Badge>
  </main>
</template>
