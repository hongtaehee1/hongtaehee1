import style from "./myProfile.module.css";

function MyProfile() {
    return <div className={style.profileContiner}>
        <img src={`${process.env.PUBLIC_URL}/profile_image.jpg`} />
        <ul className={style.profileInfo}>
            <li className={style.profileRow}>
                <h5>이름</h5>
                <p>홍태희</p>
            </li>
            <li className={style.profileRow}>
                <h5>나이</h5>
                <p>18</p>
            </li>
            <li className={style.profileRow}>
                <h5>직업</h5>
                <p>기타리스트</p>
            </li>
        </ul>
    </div>;
}

export default MyProfile;