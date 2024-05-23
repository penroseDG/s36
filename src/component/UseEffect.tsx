import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [ count , setCount ]  = useState<string>("");
    const [name ,setName] = useState<string>("")
    useEffect(()=>{
        console.log('useEffect được gọi');
    },[name,count])
    const handleClick = () => {
        setCount(count + 1);
    }
    // đoạn đi xử lí logic 
  return (
    <div>
      {/* 
        UseEffect là 1 hook
        useEffect là 1 cái hà
        SINH RA ĐỂ LÀM GÌ ?
        -  giải quyết các vấn đề về side effect (tác dụng phụ bên cạnh tác động chính)
        cú pháp như thế nào?
        *3 cú pháp useEffect
        useEffect tương tự componentDidMount
        1. nhận vào 1 tham số là callback function (arrow function)
        - khi 1 component dduowjc mount vào Dom thì useEffect được gọi 
        - khi mỗi lần component re-render thì useEffect được gọi 
        2. nhận vào 1 tham số thứ nhất là callback function (arrow function) 
        và tham số thứ 2 nhận vào một mảng rỗng []
        - khi 1 component được mount vào Dom thì useEffect được gọi
        - khi mỗi lần component re-render thì useEffect không được gọi
        3. nhận vào 1 tham số thứ nhất là callback function (arrow function) và tham số thứ 2 nhận vào một mảng [dependency] (sự phụ thuộc)
        - lần đầu tiên useEffect được gọi khi mount (gắn) vào DOM 
        - khi dependency thay đổi thì useEffect được gọi 
        cách dùng thế nào?
      */}
      <p> gia tri bien count : {count}</p>
      <button onClick={handleClick}> click up </button>
    </div>
  )
}