import videos from "../../json/videos.json";
import styles from "./Category.module.css";

export const categories = [
    "WILD RIFT",
    "PUBG",
    "DOTA 2",
    "ESTUDOS",
    "MÚSICAS",
    
  ]

export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
}

function Category({ category, children }) {

    return (
        <section className={styles.category}>
            <h2>{category}</h2>
                <div>
                    { children }
                </div>
        </section>
    );
}

export default Category;
