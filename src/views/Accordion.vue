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
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuLink,
  MenuButton,
  MenuRouterLink,
  MenuHeader
} from '@/components/Menu'
import { Flex, FlexItem } from '@/layout/Flex'

function log(event: Event) {
  console.log(event)
}
</script>

<template>
  <div class="container">
    <Accordion>
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
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>

  <div>
    <div class="flex justify-between p-4 w-[3000px]">
      <Dropdown>
        <DropdownButton>dropdown</DropdownButton>
        <DropdownContent>
          <Menu>
            <MenuLink href="https://google.ch" target="_blank">let me google for it</MenuLink>
            <MenuRouterLink to="/">home</MenuRouterLink>
            <MenuRouterLink to="#anchor">hame</MenuRouterLink>
            <MenuSeparator></MenuSeparator>
            <MenuButton @click="log">logout</MenuButton>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownButton> Menu </DropdownButton>
        <DropdownContent>
          <div class="p-4">This is dropdown 2</div>
        </DropdownContent>
      </Dropdown>
    </div>
    <div class="h-screen"></div>

    <main class="space-y-4">
      <Flex>
        <FlexItem>
          <Dropdown>
            <DropdownButton>
              <Avatar :name="`Aleksej Dix`" />
            </DropdownButton>
            <DropdownContent>
              <a href=""></a>
              <input type="text" />
              <Accordion>
                <AccordionPanel tag="section">
                  <AccordionButton class="bg-red-500 focus:bg-pink-400">
                    This is awesome
                    <Badge>123123</Badge>
                  </AccordionButton>
                  <AccordionContent class="border-4 border-red-400">
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
        </FlexItem>
        <FlexItem>
          <Dropdown>
            <DropdownButton> clicke me </DropdownButton>
            <DropdownContent>
              <div class="p-4"></div>
            </DropdownContent>
          </Dropdown>
        </FlexItem>
      </Flex>

      <AvatarGroup
        :users="[
          { name: 'Aleksej Dix' },
          { name: 'Lidia Dix' },
          { name: 'Daniel Woo' },
          { name: 'Harry Potter' }
        ]"
      />
      <Badge>Frontend</Badge>

      <AvatarGroup
        :users="[
          { name: 'Aleksej Dix' },
          { name: 'Lidia Dix' },
          { name: 'Daniel Woo' },
          { name: 'Harry Potter' }
        ]"
      />

      <Badge>Backend</Badge>

      <div class="flex justify-between">
        <Dropdown>
          <DropdownButton class="bg-red-500"> dropdown </DropdownButton>
          <DropdownContent> asdasd </DropdownContent>
        </Dropdown>

        <Dropdown>
          <DropdownButton> dropdown </DropdownButton>
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
      </div>
    </main>
  </div>
</template>
