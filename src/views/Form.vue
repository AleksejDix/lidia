<template>
  <Form v-model="form">
    <Field name="name">
      <FieldLabel>Name:</FieldLabel>
      <FieldInput type="text"></FieldInput>
    </Field>
    <Field name="agb">
      <div class="flex items-start gap-2">
        <div>
          <FieldInput type="checkbox"></FieldInput>
        </div>
        <div>
          <FieldLabel>I accept the AGB</FieldLabel>
          <FieldHelp>This is a legal contract </FieldHelp>
        </div>
      </div>
    </Field>

    <div class="flex justify-end gap-[2px]">
      <FormReset></FormReset>
      <FormSubmit></FormSubmit>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import {
  Form,
  Field,
  FieldLabel,
  FieldHelp,
  FieldInput,
  FormSubmit,
  FormReset
} from '@/components/Form/src'

const form = reactive({
  name: 'Aleksej',
  agb: true
})
</script>
