! function () {
    // 按钮提示
    window.$docsify.plugins = [].concat(window.$docsify.plugins, function (hook, vm) {
        hook.doneEach(function () 
        {
            // 查找所有的term
            var imgs = document.getElementsByTagName("img");
            var imgArr = Array.from(imgs); 

            // 遍历图片
            imgArr.forEach(function (img,index){
                // 判断 alt 是否存在内容
                if(img.alt == "")
                {
                    return;
                }
                
                // 解析描述
                var reg = /\\|([clrCLR]),([0-9]{1,2})$/;
                var args = img.alt.match(reg);
                
                // img 对齐方式
                var imgP = img.parentElement

                // 修改属性值
                if (args == null || 
                    args[1] == null ||
                    args[2] == null)
                {
                    // 居中
                    imgP.style.textAlign = "center";
                    
                    // 修改显示大小
                    img.style.width = 75 + "%";
                }
                else
                {
                    switch (args[1]) {
                        case "r":
                            imgP.style.textAlign = "right";
                            break;
                        case "R":
                            imgP.style.textAlign = "right";
                            break;
                        case "l":
                            imgP.style.textAlign = "left";
                            break;
                        case "L":
                            imgP.style.textAlign = "left";
                            break;
                        case "c":
                            imgP.style.textAlign = "center";
                            break;
                        case "C":
                            imgP.style.textAlign = "center";
                            break;
                        default:
                            imgP.style.textAlign = "center";
                            break;
                    }
                    
                    // 修改显示大小
                    img.style.width = Number(args[2]) + "%";
                }
            }); 
        });
    });
}();