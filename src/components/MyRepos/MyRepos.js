import React from 'react';
import styles from './MyRepos.module.css';
import PropTypes from 'prop-types';

const MyRepos = ({repoList}) =>
    (<div className={styles.listContainer}>
        <ul className={styles.list}>
            {repoList.map(repo =>
                (<li key={repo.id}>
                    <a className={styles.repos_ref} href={repo.html_url}>
                    <div className={styles.item_container}>
                        <div>{repo.name}</div>
                        <div className={styles.item_repos_info}>
                        <span>
                            <span className={(repo.language === 'JavaScript') ?
                                styles.JavaScript_icon : (repo.language === 'CSS') ?
                                    styles.CSS_icon : (repo.language === 'HTML') ?
                                        styles.HTML_icon : styles.language}/>
                            <span> {repo.language} </span>
                        </span>
                            <span>
                            <span className={styles.star_icon}/>
                            <span> {repo.stargazers_count} </span>
                        </span>
                            <span>
                            <span className={styles.branch_icon}/>
                            <span> {repo.forks_count} </span>
                        </span>
                            <span>обновлено {new Date(repo.updated_at).toLocaleDateString('ru-RF')}</span>
                        </div>
                    </div></a>
                </li>)
            )}
        </ul>
    </div>);

MyRepos.propTypes = {
    repoList: PropTypes.array.isRequired
};

export default MyRepos;