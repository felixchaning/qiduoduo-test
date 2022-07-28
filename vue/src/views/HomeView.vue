<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    class="form"
  >
    <a-form-item
      label="用户名"
      name="username"
      :rules="[{ required: true, message: '请输入用户名!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" @click="login">登录</a-button>
			<a-button type="primary" html-type="submit" @click="signup" style="margin-left: 1rem"
			>注册</a-button
			>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { Login, Signup } from '../api'

export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    })

    const onFinish = (values) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    const signup = (info) => {
      Signup(formState)
      console.log('signup', info)
    }

    const login = (info) => {
      Login(formState)
      console.log('login', info)
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      signup,
      login,
    }
  },
})
</script>

<style scoped>
.form {
  width: 30vw;
}
</style>
