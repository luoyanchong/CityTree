// 加载数据
import Citys from './city.csv';

console.log('citys csv data:', Citys);

//将csv数据转为js对象
const citysObj = []
Citys.slice(1).forEach(city => {
  const cityItem = {}
  const cityColums = Citys[0]
  cityItem[cityColums[0]] = city[0]
  cityItem[cityColums[1]] = city[1]
  cityItem[cityColums[2]] = city[2]
  citysObj.push(cityItem)
});
console.log('citysObj', citysObj);

// 递归查找
function findChildren(PID) {
  if (PID !== '0') {
    // 查找子节点
    return citysObj.filter(item => item.PID === PID).map(item => ({ id: item.ID, name: item.Name, children: findChildren(item.ID) }))
  } else {
    // 第一个节点
    const topNode = citysObj.find(item => item.PID === PID)
    if (topNode) {
      const children = findChildren(topNode.ID)
      return { id: topNode.ID, name: topNode.Name, children }
    }
  }
}

//结果
const citysJson = findChildren('0')
console.log('citysJson:', citysJson);

