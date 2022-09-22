import steward from './modules/vite-plugin'
import * as tiptap from './modules/tiptap'

interface EditorT extends tiptap.EditorT {}
interface ChainedCommands extends tiptap.ChainedCommands {}

export type { ChainedCommands, EditorT }
export {
  steward,
  tiptap,
}
