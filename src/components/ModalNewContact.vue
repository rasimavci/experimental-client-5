<template>
  <div class="modal-mask" v-if="addUserModal">
    <div class="modal-container">
      <query-form>
      <el-form ref="form" :model="form" :rules="rules" label-width="160px" label-position="left" >
        <el-form-item prop="firstName" label="First name">
          <el-input type="text" required v-model="form.firstName"></el-input>
        </el-form-item>
        <el-form-item prop="surname" label="Surname">
          <el-input type="text" v-model="form.surname"></el-input>
        </el-form-item>
        <el-form-item prop="mobile" label="Mobile">
          <el-input type="tel" v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="Email">
          <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="age" label="Age">
          <el-input type="number" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item prop="dob" label="Date of birth">
          <el-date-picker
            v-model="form.dob"
            type="date"
            placeholder="Date of birth">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="query" label="Customer query">
          <el-input type="textarea" placeholder="Customer query" v-model="form.query"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('form')">Submit</el-button>
          <el-button @click="clear('form')">Clear</el-button>
        </el-form-item>
      </el-form>
      </query-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const textRegex = /^[a-zA-Z]*$/
const numbersRegex = /^[0-9]+$/

export default {
  name: 'modalNewMessage',
  data () {
    return {
      participant: '',
      message: '',
    form: {
        firstName: '',
        surname: '',
        mobile: '',
        email: '',
        age: '',
        dob: '',
        query: ''
      },
      rules: {
        firstName: [
          { required: true, message: 'Your first name is required', trigger: 'blur' },
          { pattern: textRegex, message: 'First name can only contain letters', trigger: 'blur' }
        ],
        surname: [
          { required: true, message: 'Your surname is required', trigger: 'blur' },
          { pattern: textRegex, message: 'Surname can only contain letters', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Your email address is required', trigger: 'blur' },
          { message: 'Please include a valid email address', pattern: emailRegex, trigger: 'blur' }
        ],
        age: [{ pattern: numbersRegex, message: 'Age may only contain numbers', trigger: 'blur' }],
        mobile: [{ required: true, message: 'Your mobile number is required', trigger: 'blur' }],
        dob: [{ type: 'date', required: true, message: 'Your date of birth is required', trigger: 'blur' }],
        query: [{ required: true, message: 'Please add a query', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters(['addUserModal'])
  },
  methods: {
        ...mapActions(['send']),
    make () {
      this.Participant += event.target.innerText.trim()
    },
    makeCall () {
      this.send(this.participant, this.message)
      console.log('make call')
    },
    changeStatus () {
      console.log('changeStatus')
    },
    close (){
      this.participant = ''
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.QueryForm {
  padding: 20px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

.QueryForm textarea{
  height: 200px;
}

.Summary {
  padding: 20px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

.Summary-item {
  margin-bottom: 10px;
}

.Summary-item > span{
  font-weight: bold;
}
</style>
