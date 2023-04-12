export function useAutocomleteModel(props, emit) {
  function select(suggestion: any) {
    const list = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]

    const isInside = list.find(
      (selection) => selection?.[props.uniqueKey] === suggestion?.[props.uniqueKey]
    )

    if (Array.isArray(props.modelValue)) {
      if (isInside) {
        emit(
          'update:modelValue',
          props.modelValue.filter(
            (selection) => selection[props.uniqueKey] !== suggestion[props.uniqueKey]
          )
        )
        return
      }
      // add to the model on selection
      emit('update:modelValue', [...props.modelValue, suggestion])
      return
    }

    emit('update:modelValue', isInside ? undefined : suggestion)
  }

  return { select }
}
