import type { Alpine } from 'alpinejs'
import editor from './data'

export default function (Alpine: Alpine) {
  Alpine.data('editor', editor)
}
