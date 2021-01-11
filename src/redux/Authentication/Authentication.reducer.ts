/* eslint-disable import/no-anonymous-default-export */
import Swal from "sweetalert2";
import { Action } from "..";
import { User } from "../../services/Authentication.service";


declare interface AuthenticationState {
    profile?: User
}

export default function (
    state: AuthenticationState = {}, 
    action: Action
): AuthenticationState {
    switch (action.type) {

        case 'AUTHENTICATION_LOGIN':
            return Swal
            .fire({
              title: 'Success',
              icon: 'success',
              timer: 2000,
            })
            , { profile: action.payload }

        case 'AUTHENTICATION_LOGOUT':
            return {  }

        default:
            return state
    }
}