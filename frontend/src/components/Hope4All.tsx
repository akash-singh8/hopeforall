import styles from "../styles/Hope4All.module.css";

type FeatureProps = {
  heading: string;
  description: string;
  pic: string;
};

function Feature(props: FeatureProps) {
  return (
    <div className={styles.featureBlock}>
      <div className={styles.featureHeading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={styles.featureDescription}>
        <p>{props.description}</p>
      </div>
      <div className={styles.featurePic}>
        <img src={props.pic} />
      </div>
    </div>
  );
}

function Hope4All() {
  return (
    <>
      <div className={styles.hope4all}>
        <div className={styles.headingContainer}>
          <h1 className={styles.hopeheading}>Why Hope4All?</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.hopedescribe}>
            We are Hope4All, a committed crowdfunding platform in India aiming
            to provide transparent and sustainable aid to underprivileged
            communities. We constantly strive to close the gap between aid
            givers and those in need by fostering resource allocation and
            collaboration.
          </p>
        </div>
      </div>
      <div className={styles.arrow}>
        <img src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/green-curve-shape-easy.svg" />
      </div>
      <div className={styles.featuresRow}>
        <Feature
          heading="We provide financial aid"
          description="Helping individuals meet their basic needs."
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/swirl.svg"
        />
        <Feature
          heading="We offer medical assistance"
          description="Facilitating accessible healthcare for everyone."
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/globe.svg"
        />
        <Feature
          heading="We ensure basic necessities"
          description="Ensuring everyone has access to life's essentials."
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/arrow.svg"
        />
      </div>
    </>
  );
}

export default Hope4All;
