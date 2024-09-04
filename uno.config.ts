// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'


// 在 UnoCSS 中，shortcuts 和 rules 都是用于简化和定制 CSS 样式的配置项，但它们有不同的作用和使用场景。

// 1. shortcuts
// 作用: shortcuts 是一组简写，可以将多个常用的 CSS 类组合成一个简短的别名。它们的目的是让你通过一个简短的类名来快速应用一组预定义的样式。

// 用法: 你在 shortcuts 中定义一个快捷方式，然后在 HTML 中使用这个快捷方式来应用对应的样式组合

//shortcuts: {
//  'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
//}

//解析: 当你在 HTML 中使用 class="btn" 时，它会自动应用 px-4 py-2 bg-blue-500 text-white rounded 这组样式。
//使用场景: 适合用来定义一些常用的、固定的样式组合，例如按钮样式、布局样式等。

//rules
// 作用: rules 是自定义的规则，用来扩展或重定义 UnoCSS 的默认行为。通过 rules，你可以根据正则表达式匹配特定的类名，然后生成对应的 CSS 样式。
// 用法: 你在 rules 中定义一个正则表达式，当类名匹配这个正则表达式时，会根据匹配的内容生成相应的 CSS 样式。

//shortcuts: 用于定义固定的样式组合，类似于别名或预设。适合简化重复使用的、固定的类名组合。
// rules: 用于定义动态的、自定义的样式生成规则，适合根据输入参数（如数字、颜色代码）生成对应的 CSS 样式。

export default defineConfig({
  presets: [
    // 引入默认的 UnoCSS 预设
    presetUno(),
    // unocss 默认rem，转成px
    presetRemToPx({
      baseFontSize: 4
    }) as any
  ],
  //在 UnoCSS 的配置中，shortcuts 
  //允许你为一组常用的 CSS 类名定义简写。
  //这样你可以通过使用这些简写来简化代码，提高开发效率。让我们解析一下你给出的这些 shortcuts：
  shortcuts: {
    //flex: 将元素的显示模式设置为 flex 布局，使其子元素可以沿主轴排列。
    // justify-between: 在主轴（通常是水平轴）上，子元素之间留有最大空间，首个子元素和最后一个子元素分别对齐到容器的两端。
    // items-center: 在交叉轴（通常是垂直轴）上，子元素在容器的中间对齐。
    //这个快捷方式 f-b 将设置元素为 flex 布局，子元素之间留有空间，且在垂直方向居中。
    'f-b': 'flex justify-between items-center',
    //justify-center: 在主轴上，所有子元素在容器的中间对齐。
    // 这个快捷方式 f-c 将设置元素为 flex 布局，子元素在水平方向和垂直方向都居中对齐
    'f-c': 'flex justify-center items-center',
    //justify-start: 在主轴上，所有子元素靠近容器的起始位置对齐。
    //这个快捷方式 f-s 将设置元素为 flex 布局，子元素在水平方向靠左对齐，并在垂直方向居中对齐。
    'f-s': 'flex justify-start items-center',
    //justify-end: 在主轴上，所有子元素靠近容器的结束位置对齐。
    // 这个快捷方式 f-e 将设置元素为 flex 布局，子元素在水平方向靠右对齐，并在垂直方向居中对齐。
    'f-e': 'flex justify-end items-center',
    //truncate: 这个类用于设置文本溢出时以省略号（...）的形式显示。通常结合 overflow: hidden; 和 white-space: nowrap; 一起使用。
    //这个快捷方式 text-overflow 将文本溢出时的显示方式设置为省略号。
    'text-overflow': 'truncate',
    //w-full: 将元素的宽度设置为父容器的 100%。
    //h-full: 将元素的高度设置为父容器的 100%。
    //这个快捷方式 wh-full 将元素的宽高都设置为充满父容器的 100%。
    'wh-full': 'w-full h-full'
  },
  rules: [
    //1. 边框宽度规则: /^b-(\d+)$/                 <div class="b-2">内容</div> <!-- 生成2px宽的边框 -->
    [/^b-(\d+)$/, (match) => ({ 'border-width': `${match[1]}px` })],
    //2. 边框颜色规则: /^b-(\d+)-#([\w]+)$/        <div class="b-2-#ff0000">内容</div> <!-- 生成2px宽的红色边框 -->
    [/^b-(\d+)-#([\w]+)$/, (match) => ({ border: `solid ${match[1]}px #${match[2]}` })],
    //3. 上边框颜色规则: /^bt-(\d+)-#([\w]+)$/      <div class="bt-2-#00ff00">内容</div> <!-- 生成2px宽的绿色上边框 -->
    [/^bt-(\d+)-#([\w]+)$/, (match) => ({ 'border-top': `solid ${match[1]}px #${match[2]}` })],
    //4. 下边框颜色规则: /^bb-(\d+)-#([\w]+)$/      <div class="bb-2-#0000ff">内容</div> <!-- 生成2px宽的蓝色下边框 -->
    [/^bb-(\d+)-#([\w]+)$/, (match) => ({ 'border-bottom': `solid ${match[1]}px #${match[2]}` })],
    //5. 左边框颜色规则: /^bl-(\d+)-#([\w]+)$/      <div class="bl-2-#ff00ff">内容</div> <!-- 生成2px宽的紫色左边框 -->
    [/^bl-(\d+)-#([\w]+)$/, (match) => ({ 'border-left': `solid ${match[1]}px #${match[2]}` })],
    //6. 右边框颜色规则: /^br-(\d+)-#([\w]+)$/     <div class="br-2-#ffff00">内容</div> <!-- 生成2px宽的黄色右边框 -->
    [/^br-(\d+)-#([\w]+)$/, (match) => ({ 'border-right': `solid ${match[1]}px #${match[2]}` })],
    //7. 水平内边距规则:/^px-(\d+)$/                <div class="px-4">内容</div> <!-- 左右内边距为4px -->
    [/^px-(\d+)$/,  (match) => ({ 'padding-left': `${match[1]}px`, 'padding-right': `${match[1]}px` })],
    //8. 垂直内边距规则:/^py-(\d+)$/                <div class="py-4">内容</div> <!-- 上下内边距为4px -->
    [/^py-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px`, 'padding-bottom': `${match[1]}px` })],
    //9. 水平外边距规则 /^mx-(\d+)$/                  <div class="mx-4">内容</div> <!-- 左右外边距为4px -->
    [/^mx-(\d+)$/,     (match) => ({ 'margin-left': `${match[1]}px`, 'margin-right': `${match[1]}px` })],
    //10. 垂直外边距规则 /^my-(\d+)$/                 <div class="my-4">内容</div> <!-- 上下外边距为4px -->
    [/^my-(\d+)$/,    (match) => ({ 'margin-top': `${match[1]}px`, 'margin-bottom': `${match[1]}px` })],
    // 11. 上内边距规则 /^pt-(\d+)$/                 <div class="pt-4">内容</div> <!-- 上内边距为4px -->
    [/^pt-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px` })],
    //12. 下内边距规则 /^pb-(\d+)$/                  <div class="pb-4">内容</div> <!-- 下内边距为4px -->
    [/^pb-(\d+)$/, (match) => ({ 'padding-bottom': `${match[1]}px` })],
    //13. 左内边距规则/^pl-(\d+)$/                   <div class="pl-4">内容</div> <!-- 左内边距为4px -->
    [/^pl-(\d+)$/, (match) => ({ 'padding-left': `${match[1]}px` })],
    //14. 右内边距规则 /^pr-(\d+)$/                 <div class="pr-4">内容</div> <!-- 右内边距为4px -->
    [/^pr-(\d+)$/, (match) => ({ 'padding-right': `${match[1]}px` })],
    //15. 上外边距规则/^mt-(\d+)$/                   <div class="mt-4">内容</div> <!-- 上外边距为4px -->
    [/^mt-(\d+)$/, (match) => ({ 'margin-top': `${match[1]}px` })],
    //16. 下外边距规则/^mb-(\d+)$/                   <div class="mb-4">内容</div> <!-- 下外边距为4px -->
    [/^mb-(\d+)$/, (match) => ({ 'margin-bottom': `${match[1]}px` })],
    //17. 左外边距规则  /^ml-(\d+)$/                 <div class="ml-4">内容</div> <!-- 左外边距为4px -->
    [/^ml-(\d+)$/, (match) => ({ 'margin-left': `${match[1]}px` })],
    //18. 右外边距规则/^mr-(\d+)$/                  <div class="mr-4">内容</div> <!-- 右外边距为4px -->
    [/^mr-(\d+)$/, (match) => ({ 'margin-right': `${match[1]}px` })]
  ]
})
