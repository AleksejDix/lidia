// useUserInput.js
import { ref } from 'vue'

export function useUserInput() {
  const inputText = ref('')
  const parsedDate = ref(null)

  function handleInputChange(newText: string) {
    inputText.value = newText
    // Parse the input text and update the parsedDate ref
    // You may use a custom date parser or a library for parsing different date formats
    // You may use Prefix Tree to find all possible dates
  }

  return {
    inputText,
    parsedDate,
    handleInputChange
  }
}
