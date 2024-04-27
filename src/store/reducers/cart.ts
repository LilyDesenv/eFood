import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  isCartListOpen: boolean
  isAddressOpen: boolean
  isPaymentsOpen: boolean
  isConfirmsOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCartListOpen: false,
  isAddressOpen: false,
  isPaymentsOpen: false,
  isConfirmsOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const itemMenu = state.items.find((item) => item.id === action.payload.id)
      if (!itemMenu) {
        state.items.push(action.payload)
      } else {
        alert('O prato já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.isCartListOpen = true
      state.isAddressOpen = false
      state.isPaymentsOpen = false
      state.isConfirmsOpen = false
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    showCartList: (state) => {
      state.isCartListOpen = true
      state.isAddressOpen = false
      state.isPaymentsOpen = false
      state.isConfirmsOpen = false
    },
    showAddress: (state) => {
      state.isCartListOpen = false
      state.isAddressOpen = true
      state.isPaymentsOpen = false
      state.isConfirmsOpen = false
    },
    showPayment: (state) => {
      state.isCartListOpen = false
      state.isAddressOpen = false
      state.isPaymentsOpen = true
      state.isConfirmsOpen = false
    },
    showConfirm: (state) => {
      state.isCartListOpen = false
      state.isAddressOpen = false
      state.isPaymentsOpen = false
      state.isConfirmsOpen = true
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  clear,
  showCartList,
  showAddress,
  showPayment,
  showConfirm
} = cartSlice.actions
export default cartSlice.reducer
