<template>
  <div class="kine">
      <div class="top">
          <label for="">文章标题</label>
          <el-input v-model="input" placeholder="请输入内容">在centos7.3中安装mysql5.7数据库</el-input>
      </div>
      <div class="one">
          <p>是否显示</p>
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
      </div>
      <div class="two">
          <p>是否推荐</p>
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
      </div>
      <div class="top">
          <label for="">作者</label>
          <el-input v-model="input" placeholder="请输入内容">陈元广</el-input>
      </div>
      <div class="top">
          <label for="">导读</label>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">在centos7中安装mysql5.7的操作步骤，以及端口和安全组的开发，这里使用的是阿里云服务器；由瑞典MySQL AB公司开发，目前属于Oracle旗下产品。MySQL是最流行的关系型数据库管理系统之一，
            </el-input>
      </div>
      <div class="top">
          <label for="">时间</label>
          <el-time-select
            v-model="value1"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
            </el-time-select>
      </div>
      <div class="top">
          <label for="">缩略图</label>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      radio: '1',
      textarea: '',
      value1: ''
    }
  }
}
</script>

<style>

</style>
