<template>
  <form @submit.prevent="signUp">
  <h2>Sign Up</h2>
    <input type="text"     placeholder="Username" required v-model="username">
    <input type="email"    placeholder="Email"    required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/init.js'

export default {
  data() {
    return {
      username: '',
      email:    '',
      password: ''
    }
  },
  methods: {
    signUp() {
      // register new user
      createUserWithEmailAndPassword(auth,this.email,this.password)
          .then((credential) => {

            // update 'displayName'
            updateProfile(auth.currentUser, {
              displayName: this.username
            })
                .then(() => {
                  // emit event
                  this.$emit('loggedIn')
                  //console.log(auth.currentUser.displayName)
                })

            // registered and signed in
            //console.log(credential.user)
          })
          .catch((error) => {
            console.log(error.message)
          })
    }
  }
}
</script>
