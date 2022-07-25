// 选择需要观察变动的节点
const targetNode = document.getElementsByTagName('body');
 
// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };
 
// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    console.log(mutationsList)
};
 
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
 
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
 
// 之后，可停止观察
observer.disconnect();