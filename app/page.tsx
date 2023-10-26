"use client"
import {useAppDispatch,useAppSelector} from './hooks'
import {increment, decrement, incrementByAmount,selectCount} from './features/counter/counterSlice'
import { useGetProductByNameQuery } from './api/test';
import {UserData} from "./api/types"
export default function Home() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.counter.value)
  const {data} = useGetProductByNameQuery("");
  

  if (!data) {
    return  (
   
      <div>
        <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
  
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
  
         
  
      </div>
    );
}return (
  <div>
      {data.map((item: UserData) => (
          <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.company.catchPhrase}</p>
              <p>{item.address.city}</p>
          </div>
      ))}
  </div>)}