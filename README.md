# 作用

`doscify`的插件，调整图片的对齐方式与显示尺寸

# 使用

```markdown
![simple|<对齐方式>,<尺寸>](/image/simple样式.jpg)
```
- 对齐方式：支持 `c,l,r`
- 尺寸：范围 `0 ~ 100`

使用案例

```markdown
![simple|c,75](/image/simple样式.jpg)
```


# 安装

在`index.html`中的`body`内分别添加以下内容


```html
    <script src="https://cdn.jsdelivr.net/gh/spite-triangle/docsify-ResizeImage/script/ResizeImage.min.js"></script>
```
