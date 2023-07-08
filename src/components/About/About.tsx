import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <img src="/perfil.jpeg" alt="Javier" className={styles.photo} />
        <h2 className={styles.hi}>
          <b>Hi! </b> This is me, javi
        </h2>
        <h4>
          After a wild career in social work, I&apos;m now back to my
          engineering roots as a <b>fullstack</b> and <b>frontend</b> developer
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente
          itaque nesciunt nemo consequatur, aperiam deleniti illo necessitatibus
          suscipit et? Ea nostrum omnis magni natus quod incidunt modi fugit
          rerum! Molestias distinctio delectus maiores tenetur fugiat explicabo
          enim hic rerum voluptatem nobis eaque molestiae unde error non,
          debitis soluta quod rem. Fugiat expedita molestiae, tempore aut
          consectetur dolores dolor. Consequuntur. Ipsa totam tenetur iusto
          voluptate praesentium ut maiores illum necessitatibus non, numquam aut
          alias, voluptatibus cupiditate dolor nemo illo enim dolores minus.
          Vitae repellendus numquam dolor architecto, amet voluptas mollitia.
          Debitis consequuntur molestias pariatur nobis nam? Vitae excepturi
          aperiam optio omnis nostrum. Reprehenderit delectus, excepturi earum
          inventore illo quaerat praesentium ab minima est fugiat omnis magni
          saepe expedita voluptate? Reiciendis.
        </p>
      </div>
    </section>
  );
};
