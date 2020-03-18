interface SourceItem {
  value: string
  text: string
  children?: SourceItem[]
}

type TreeProps = {
  sourceData: SourceItem[]
  selected: string[]
  onChange: (values: string[]) => void
} & ({
  multiple: true,
} | {
  multiple: false,
})