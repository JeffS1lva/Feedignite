import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/118827532?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jefferson Silva</strong>
              <time title="11 de maio às 08:13h" datetime="2022-05-11 08:13:30">Cerca de 01h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}  />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏 </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}