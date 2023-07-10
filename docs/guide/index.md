## 说明

## Button 按钮

<el-button>默认按钮</el-button>
<el-button type="primary">默认按钮</el-button>

::: details 显示代码

```html
<el-button>默认按钮</el-button> <el-button type="primary">默认按钮</el-button>
```

:::

```vue
<el-input
  v-if="['text', 'number', 'textarea'].includes(type)"
  v-on="actions"
  v-model="selfValue"
  v-bind="{ ...$attrs, maxLength: $attrs.maxLength ? $attrs.maxLength : 20 }"
  v-transformView="operate === 'config'"
  @change="handleChange"
  @input="handleInput"
  @blur="handleBlur"
  :type="type === 'textarea' ? 'textarea' : 'text'"
  :placeholder="$attrs.placeholder || '请输入'"
  clearable
>
		<template #append v-if="inputAppend">
			{{ inputAppend }}
		</template>
	</el-input>
```
