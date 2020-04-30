import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 获取问卷测评的所有题目
  getAllTest: data => post('/api/subject/getSubjectList', data),

  // 提交问卷测评
  submitAllTest: data => post('/api/subject/setAnswer', data)

}

export default api