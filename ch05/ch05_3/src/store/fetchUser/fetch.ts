import {Dispatch} from 'redux'
import * as L from '../loading'
import * as E from '../errorMessage'
import {setUser, changName, changeEmail, changePicture} from './actions'
import * as D from '../../data'

export const getRemoteUser = () => (dispatch: Dispatch) => {
  dispatch(L.setLoading(true))
  dispatch(E.setErrorMessage(''))
  D.fetchRandomUser()
    .then(user => dispatch(setUser(user)))
}