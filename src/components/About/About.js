import React from 'react';
import styles from './About.module.css';
import Octokit from "@octokit/rest";

const octokit = new Octokit();
class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        fetchResponse: true,
        fetchError: '',
    };

    componentDidMount() {
        octokit.repos.listForUser( {
            username: '1Amdro',
        type: "all"
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoading: false,
                avatar: data[0].owner.avatar_url,
                user : data[0].owner.login,
                fetchResponse: true
            });
            console.log(data[0].owner.avatar_url)
        }).catch(({error}) => {
            this.setState( {
                reposList: error,
                isLoading: false,
                fetchResponse: false,
                fetchError: 'Ошибка! Попробуйте еще раз!'
            })
        })
    }

    render() {
        const {isLoading, repoList, fetchError, fetchResponse, avatar, user} = this.state;
        return (<div className={styles.wrap}>
            <div className={styles.container}>
                {isLoading ? <div className={styles.preloader}/> :
                    <div className={styles.innerContainer}>
                        <div className={styles.login}>
                            {user}</div><img className={styles.avatar} src={avatar} alt=''/>
                    </div>}
                {(fetchResponse && !isLoading && <ol className={styles.list}>
                    {repoList.map(repo => (<li key={repo.id}><a className={styles.item} href={repo.html_url}>{repo.name}</a></li>))}
                </ol>) || <div className={styles.error}>{fetchError}</div> }
            </div>
        </div>)
    }
}

export default About;