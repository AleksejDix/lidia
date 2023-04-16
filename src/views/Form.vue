<template>
  <Form v-model="form" :validation="schema">
    <Field name="name">
      <FieldLabel>Name:</FieldLabel>
      <FieldInput type="text"></FieldInput>
      <FieldError></FieldError>
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
      <FieldError></FieldError>
    </Field>

    <div class="flex justify-end gap-[2px]">
      <FormReset></FormReset>
      <FormSubmit></FormSubmit>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { z } from 'zod'

import {
  Form,
  Field,
  FieldLabel,
  FieldHelp,
  FieldInput,
  FormSubmit,
  FormReset,
  FieldError
} from '@/components/Form/src'

const form = reactive({
  name: 'asdasd',
  agb: undefined
})

const schema = z.object({
  name: z.string().email({ message: 'Invalid email address' }),
  agb: z.boolean()
})
</script>
