import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Jefferson Silva"
						content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit optio reprehenderit, vero iure rerum corporis! Adipisci quae fuga quibusdam cupiditate aliquid, recusandae odit doloribus tenetur? Corporis quo impedit aut tenetur!"
					/>
					<Post
						author="Jefferson Silva"
						content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit optio reprehenderit, vero iure rerum corporis! Adipisci quae fuga quibusdam cupiditate aliquid, recusandae odit doloribus tenetur? Corporis quo impedit aut tenetur!"
					/>
					
					
				</main>
			</div>
		</div>
	);
}
