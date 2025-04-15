<<<<<<< HEAD
import * as L from './listEntities'
=======
import * as L from './loading'
>>>>>>> 3c8b226c703e719e954dd47336dd1f84232ba752
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export type AppState = {
  listEntities: L.State
  listidOrders: LO.State
  listidCardidOrders: LC.State
  cardEntities: C.State
}