import { ref } from 'vue'
type TrieNode = {
  isWord: boolean
  objects: any[]
  children: Record<string, TrieNode>
}

function createNode(): TrieNode {
  return {
    isWord: false,
    objects: [],
    children: {}
  }
}

export function insert(trie: TrieNode, word: string, obj: any) {
  let currentNode: TrieNode = trie
  for (const char of word) {
    const lowercaseChar = char.toLowerCase()
    if (!currentNode.children[lowercaseChar]) {
      currentNode.children[lowercaseChar] = createNode()
    }
    currentNode = currentNode.children[lowercaseChar]
  }
  currentNode.isWord = true
  currentNode.objects.push(obj)
}

export function search(trie: TrieNode, query: string): any[] {
  const result: any[] = []
  let currentNode: TrieNode = trie
  for (const char of query) {
    const lowercaseChar = char.toLowerCase()
    if (!currentNode.children[lowercaseChar]) {
      return []
    }
    currentNode = currentNode.children[lowercaseChar]
  }
  traverse(currentNode, result, query)
  console.log(trie)
  return result
}

function traverse(node: TrieNode, result: any[], prefix: string) {
  if (node.isWord) {
    for (const obj of node.objects) {
      result.push(obj)
    }
  }
  for (const char in node.children) {
    traverse(node.children[char], result, prefix + char)
  }
}

interface TrieOptions {
  items: any[]
  searchKey: string
}

export function useTrie(options: TrieOptions) {
  const trieRoot = ref<TrieNode>(createNode())

  options.items.forEach((item) => {
    insert(trieRoot.value, item[options.searchKey], item)
  })

  const searchFn = (query: string) => {
    return search(trieRoot.value, query)
  }

  return {
    search: searchFn
  }
}
