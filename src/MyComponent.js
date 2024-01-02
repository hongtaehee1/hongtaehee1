import { useState, useTransition } from 'react';
import MyProfile from './MyProfile';
import Navbar from './Navbar';

import style from './myComponent.module.css';


function MyComponent() {
    const [value, setValue] = useState('');
    if (value === "홍태희") {


    } else if (value === "") {

    } else {

    }
    return <div className={style.myComponent}>
        <header className={style.myComponentHeader}>
            <Navbar onChange={(value) => setValue(value)} />
        </header>
        <div className={style.myComponentBody}>
            <h1>내 프로필을 검색해보자!</h1>
            {value === '' 
            ? '프로필을 입력해주세요'
            :  (value === '홍태희'
                 ? <MyProfile/> 
                 : '프로필이 올바르지 않습니다.')}
        </div>
    </div>;
}

export default MyComponent;