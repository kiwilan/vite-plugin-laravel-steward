import type { Alpine } from 'alpinejs'
import editor from './editor'

export default function (Alpine: Alpine) {
  Alpine.data('editor', editor)
}
