interface SourceItem {
  key: string
  text: string
  children?: SourceItem[]
}

interface SelectedMap {
  [key: string]: string[]
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