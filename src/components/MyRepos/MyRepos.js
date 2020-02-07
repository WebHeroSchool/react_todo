import React from 'react';
import styles from './MyRepos.module.css';

const MyRepos = ({repoList}) =>
    (<div className={styles.listContainer}>
        <ul className={styles.list}>
            {repoList.map(repo =>
                (<li key={repo.id}>
                    <div className={styles.item_container}>
                        <a className={styles.item} href={repo.html_url}>{repo.name}</a>
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
                    </div>
                </li>)
            )}
        </ul>
    </div>);

export default MyRepos;