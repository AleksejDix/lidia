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
import { Flex, FlexItem } from '@/layout/Flex'
</script>

<template>
  <div>
    <div class="bg-green-900 fixed inset-0">
      <div class="fixed left-0 top-0">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>

      <div class="fixed left-1/2 -translate-x-1/2">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>

      <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
      <div class="fixed right-0 top-0">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
      <div class="fixed right-0 bottom-0">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
      <div class="fixed left-0 bottom-0">
        <Dropdown>
          <DropdownButton> clicke me </DropdownButton>
          <DropdownContent>
            <div class="p-4">
              <input type="text" />
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
    </div>

    <main class="space-y-4">
      <Flex>
        <FlexItem>
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
        </FlexItem>
        <FlexItem>
          <Dropdown>
            <DropdownButton> clicke me </DropdownButton>
            <DropdownContent>
              <div class="p-4">
                <input type="text" />
              </div>
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
  </div>
</template>
