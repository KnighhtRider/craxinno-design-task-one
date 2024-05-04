import styles from "../ContentLayout/ContentLayout.module.css";
import Form from "./Form/Form";

function ContentLayout() {
  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        {/* Text Area */}
        <div className={styles.text}>
          <div className={styles.headingAdv}>
            Advanced analytics to grow your business
          </div>

          <div className={styles.headingLorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </div>
        </div>

        {/* Form Component */}
        <Form />
      </div>
    </div>
  );
}

export default ContentLayout;
