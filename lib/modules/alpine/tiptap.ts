import type { ChainedCommands, EditorT } from '../../dist'
import { tiptap } from '../../dist'
// import { CharacterCount, Editor, Link, StarterKit, Typography } from '../../dist'
// import type { ChainedCommands } from '../../dist'
import type { ActionButton } from './tiptap-actions'
import { ExecuteCommand, Extras, Marks, Nodes } from './tiptap-actions'

let refs: {
  editorReference: HTMLElement
}

let editor: EditorT

/**
 * Tiptap editor
 *
 * Helped with: https://github.com/ueberdosis/tiptap/issues/1515#issuecomment-903095273
 */
const Tiptap = () => ({
  content: '<p>This is where the content goes</p>',
  actions: [] as ActionButton[],
  updatedAt: Date.now(),
  $wire: {
    content: '',
  },
  init() {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore - this is a reference to the Alpine data object
    refs = this.$refs

    editor = new tiptap.Editor({
      element: refs.editorReference,
      extensions: [
        tiptap.StarterKit,
        tiptap.Typography,
        // CharacterCount.configure({
        //   limit: this.limit,
        // }),
        tiptap.CharacterCount,
        tiptap.Link,
      ],
      content: this.content,
      onCreate: () => {
        this.updatedAt = Date.now()
        this.content = editor.getHTML()
        this.$wire.content = this.content
      },
      onUpdate: ({ editor }) => {
        this.updatedAt = Date.now()
        this.content = editor.getHTML()
        this.$wire.content = this.content
      },
      onTransaction: () => {
        this.updatedAt = Date.now()
      },
    })

    this.actions = [
      Marks.bold,
      Marks.italic,
      Marks.strike,
      Marks.code,
      Marks.link,
      Nodes.h1,
      Nodes.h2,
      Nodes.h3,
      Extras.separator,
      Nodes.codeBlock,
      Nodes.blockquote,
      Nodes.bulletList,
      Nodes.orderedList,
      Nodes.horizontalRule,
      Nodes.hardBreak,
      Extras.separator,
      Extras.clearNodes,
      Extras.redo,
      Extras.undo,
    ]
  },
  isActive(action: ActionButton) {
    return editor.isActive(action.command, action.params)
  },
  isChainedCommands(method: ChainedCommands): method is ChainedCommands {
    return (<ChainedCommands>method).run() !== undefined
  },
  command(action: ActionButton) {
    ExecuteCommand(editor, action)
  },
  countCharacters() {
    return editor.storage.characterCount.characters()
  },
  countWords() {
    return editor.storage.characterCount.words()
  },
})

export default Tiptap
