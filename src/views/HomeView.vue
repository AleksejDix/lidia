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
  <div class="w-[3000px]">
    <div class="flex justify-between p-4">
      <Dropdown>
        <DropdownButton> Menu </DropdownButton>
        <DropdownContent>
          <div class="p-4">This is dropdown 1</div>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownButton> Menu </DropdownButton>
        <DropdownContent>
          <div class="p-4">This is dropdown 2</div>
        </DropdownContent>
      </Dropdown>
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

      <div class="h-screen w-full"></div>

      <div class="flex justify-between w-[2000px]">
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

      <div class="h-screen w-full"></div>

      <div class="flex justify-between">
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

        <Dropdown>
          <DropdownButton> dropdown </DropdownButton>
          <DropdownContent>
            <Dropdown>
              <DropdownButton> Menu </DropdownButton>
              <DropdownContent>
                <div class="p-4">This is dropdown 1</div>
              </DropdownContent>
            </Dropdown>

            <Dropdown>
              <DropdownButton> Menu </DropdownButton>
              <DropdownContent>
                <div class="p-4">This is dropdown 2</div>
              </DropdownContent>
            </Dropdown>
          </DropdownContent>
        </Dropdown>
      </div>
    </main>
  </div>
</template>
