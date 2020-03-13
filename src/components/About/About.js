import React from 'react';
import styles from './About.module.css';
import Octokit from '@octokit/rest';
import UserInfo from '../UserInfo/UserInfo';
import MyRepos from '../MyRepos/MyRepos';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        fetchResponse: true,
        isMounted: false
    };

    componentDidMount() {
        this.setState({isMounted: true});

        octokit.repos.listForUser({
            username: '1Amdro',
            type: 'all'
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoading: false,
                fetchResponse: true,
            });
        }).catch(({error}) => {
            this.setState({
                reposList: error,
                isLoading: false,
                fetchResponse: false
            })
        });
        octokit.users.getByUsername({
                username: '1Amdro'
            }
        ).then(({data}) => {
            this.setState({
                avatar: data.avatar_url,
                user: data.login,
                bio: data.bio
            })
        })
    }

    componentWillUnmount() {
        this.setState({isMounted: true});
    }

    render() {
        const {isLoading, repoList, fetchResponse, avatar, user, bio} = this.state;
        return (<div className={styles.wrap}>
            <div className={styles.container}>
                {isLoading ? <div className={styles.preloader}/>
                    :
                    <UserInfo fetchResponse={fetchResponse}
                              user={user}
                              bio={bio}
                              avatar={avatar}/>}
                {isLoading ? <div className={styles.preloader}/> :
                    fetchResponse ?
                        <section>
                            <h2 className={styles.subtitle}>Репозитории на github.com</h2>
                            <MyRepos repoList={repoList}/>
                        </section>
                        :
                        <div className={styles.error}><img/></div>}
            </div>
        </div>)
    }
}

export default About;