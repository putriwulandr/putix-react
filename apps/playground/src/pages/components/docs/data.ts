export type ComponentStatus = 'stable' | 'beta' | 'soon'

export interface ComponentMeta {
  name: string
  slug: string
  status: ComponentStatus
}

export const COMPONENTS: ComponentMeta[] = [
  { name: 'Button', slug: 'button', status: 'stable' },
  { name: 'Badge', slug: 'badge', status: 'soon' },
  { name: 'Card', slug: 'card', status: 'soon' },
  { name: 'Input', slug: 'input', status: 'soon' },
  { name: 'Modal', slug: 'modal', status: 'soon' },
]
