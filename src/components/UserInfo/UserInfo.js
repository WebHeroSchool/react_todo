import React from 'react';
import styles from './UserInfo.module.css';

class UserInfo extends React.Component {
    render() {
        const {avatar, bio, user} = this.props;
        return (<section className={styles.innerContainer}>
            <div className={styles.avatar}>
                <img className={styles.avatar} src={avatar} alt='Загрузка аватарки не удалась'/>
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>Адам Халгуев</h2>
                <h3>{user}</h3>
                <p>{bio}</p>
                <div className={styles.miniContainer}><div className={styles.email_icon}/><div>halgadam@gmail.com</div></div>
                <div className={styles.miniContainer}><div className={styles.number_icon}/><div>+79260242041</div></div>
            </div>
            <div className={styles.links}>
                <div className={styles.whs_icon}/>
                <div className={styles.links_container}>
                    <a href='https://github.com/1Amdro'><div className={styles.github_link}/></a>
                    <a href='https://vk.com/adamhalg'><div className={styles.vk_link}/></a>
                </div>
            </div>
        </section>)
    }
}

export default UserInfo;