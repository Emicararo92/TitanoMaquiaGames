import styles from "../../../Styles/NewsDetail.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.topBanner}>
        <div className={styles.skeletonBanner}></div>
      </div>

      <div className={styles.newsArticle}>
        <div className={styles.skeletonMeta}></div>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonExcerpt}></div>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonContent}></div>
        <div className={styles.skeletonContent}></div>
        <div className={styles.skeletonFooter}></div>
      </div>
    </div>
  );
}
