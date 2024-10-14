import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://avatars.githubusercontent.com/u/118827532?v=4" />
            <div className={styles.authorInfo}>
              <strong>Jefferson Silva</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="11 de maio às 08:13h" datetime="">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portfolio. É um projeto que
            fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀
          </p>
          <p>
            <a href="##">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="##">#novoprojeto</a> <a href="">#nlw</a>{" "}
            <a href="">#rocketseat</a>{" "}
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário" />
          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </div>
  );
}
