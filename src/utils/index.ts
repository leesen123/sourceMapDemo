import axios from 'axios'
import sourceMap from 'source-map-js'

const getSourceMap = async (url: string) => {
  const res = await axios.get(url)
  return res
}

export const findCodeBySourceMap = async (stackFrame: any) => {
  // url + 存放map文件的服务地址
  // 获取map文件
  const sourceData = await getSourceMap(stackFrame.fileName + '.map')
  const fileContent = sourceData.data
  // 解析map文件
  const consumer = await new sourceMap.SourceMapConsumer(fileContent)
  // 通过报错的位置查找对应的源文件的名称以及报错行号
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber || 0,
  })
  const code = consumer.sourceContentFor(originalPosition.source)
  console.log('🚀 ~ findCodeBySourceMap ~ code:', code)

  return code
}
