import { createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  fullname:'',
  email:'',
  pic:'',
  _id:'',
 token:'',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
      // Action to add comment

      setUserDetails: (state, action) => {
        const{fullname,email,token,_id,pic} = action.payload;
        state.fullname=fullname;
        state.email=email;
        state.pic=pic;
        state._id=_id;
        state.token=token
      },
    },
  });
  
  export const { setUserDetails } = userSlice.actions;
  export default userSlice.reducer;