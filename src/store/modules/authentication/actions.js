import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../../../router';

export default {
  loginAction: ({commit}, {email, password}) => {
    axios.post('http://localhost:3000/login', {
      email,
      password
    }).then(({data}) => {
      commit('SET_USER_DATA', data );
      router.push('/default-menu')
    }).catch((e) => {
      Swal({
          title: 'Credenciais inválidas',
          text: 'Por favor, verifique suas credenciais',
          type: 'error',
          dangerMode: true,
          confirmButtonText: 'Ok',
      }).then((result) => {
          if (result.value) {
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          }
      });
    })
  },

  logoutAction: ({commit}) => {
    commit('SET_USER_DATA', false );
  }
}
