# Vue Modal Components

A set of Vue.js 3 components to create accessible, reusable, and customizable modals for your application.

## Installation

Copy the following components and utilities to your project:

1. Modal.vue
2. ModalButton.vue
3. ModalCloseButton.vue
4. ModalTitle.vue
5. symbols.ts
6. useModalStore.ts

Ensure the files are placed in an appropriate folder within your project.

### Import

```html
<script setup lang="ts">
import {
  Modal,
  ModalButton,
  ModalCloseButton,
  ModalTitle,
} from "@/path/to/modal/components";
</script>


## Components

### Modal

The main modal component that contains the content to be displayed.

#### Props

`name`: (String) A unique identifier for the modal.

#### Usage

```html
<Modal name="myModal">
  <!-- Add modal content here -->
</Modal>
```

### ModalButton

A button component that triggers the opening of a modal.

#### Props

`name`: (String) The name of the modal that should be opened when the button is clicked.

#### Usage 

```html
<ModalButton name="myModal">Open Modal</ModalButton>
``` 

### ModalCloseButton

A button component that triggers the closing of its parent modal.

#### Usage

```
<ModalCloseButton>Close Modal</ModalCloseButton>
```

### ModalTitle

A component that displays the title of the modal. It also provides accessibility support through the aria-labelledby attribute.

```html
<ModalTitle>My Modal Title</ModalTitle>
```

### Example

Here's a complete example of using the modal components in a Vue.js application, including a simple modal and a nested modal:

####   Simple Modal  

```html

    <ModalButton name="simpleModal">Open Simple Modal</ModalButton>

    <Modal name="simpleModal">
      <ModalTitle>Simple Modal</ModalTitle>
      <div>
        <p>This is the content of the simple modal.</p>
      </div>
      <ModalCloseButton>Close Modal</ModalCloseButton>
    </Modal>

```

#### Nested Modal

```html
<ModalButton name="parentModal">Open Parent Modal</ModalButton>

<Modal name="parentModal">
    <ModalTitle>Parent Modal</ModalTitle>
        <div>
            <p>This is the content of the parent modal.</p>
            <ModalButton name="nestedModal">Open Nested Modal</ModalButton>
        </div>
        <ModalCloseButton>Close Parent Modal</ModalCloseButton>

        <Modal name="nestedModal">
            <ModalTitle>Nested Modal</ModalTitle>
                <div>
                    <p>This is the content of the nested modal.</p>
                </div>
        <ModalCloseButton>Close Nested Modal</ModalCloseButton>
    </Modal>
</Modal>
```

#### Real life Example - Confirm Delete Account

In this example, clicking the "Delete Account" button opens the deleteAccountModal, which prompts the user to confirm the deletion of their account. If the user clicks "Yes, delete my account", the confirmDeleteModal is opened for final confirmation. If the user confirms the deletion by clicking the "Confirm Deletion" button, the deleteAccount method is executed to handle the account deletion logic. The user can cancel the deletion process at any point by clicking the "Cancel" or "Go back" buttons provided by the ModalCloseButton components.


```vue
<template>
  <div>
    <h1>Delete Account</h1>

    <!-- Delete Account Modal -->
    <ModalButton name="deleteAccountModal">Delete Account</ModalButton>

    <Modal name="deleteAccountModal">
      <ModalTitle>Confirm Account Deletion</ModalTitle>
      <div class="modal-content">
        <p>Are you sure you want to delete your account?</p>
        <ModalButton name="confirmDeleteModal">Yes, delete my account</ModalButton>
      </div>
      <ModalCloseButton>Cancel</ModalCloseButton>

      <!-- Confirm Deletion Modal -->
      <Modal name="confirmDeleteModal">
        <ModalTitle>Final Confirmation</ModalTitle>
        <div class="modal-content">
          <p>This action cannot be undone. Are you sure you want to delete your account?</p>
          <button @click="deleteAccount">Confirm Deletion</button>
        </div>
        <ModalCloseButton>Go back</ModalCloseButton>
      </Modal>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import {
  Modal,
  ModalButton,
  ModalCloseButton,
  ModalTitle,
} from "@/path/to/modal/components";


const deleteAccount = () => {
    // Implement account deletion logic here.
}
</script>



```


