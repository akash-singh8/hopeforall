import style from "../styles/Approach.module.css";

type ApproachBlockProps = {
  pic: string;
  heading: string;
  description: string;
};

function ApproachBlock(props: ApproachBlockProps) {
  return (
    <div className={style.approachBlock}>
      <div className={style.approachPic}>
        <img src={props.pic} />
      </div>
      <div className={style.approachSubHeading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={style.approachDescription}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function Approach() {
  return (
    <>
      <div className={style.approach}>
        <div className={style.approachHeading}>
          <h1>Our Approach</h1>
        </div>
        <div className={style.astrikImage}>
          <img src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/star.svg" />
        </div>
        <div className={style.approachExplanation}>
          <p>
            With a focus on transparency, collaboration, and sustainability, we
            uphold a unique approach to aiding underprivileged communities.
          </p>
        </div>
      </div>
      <div className={style.approachRow}>
        <ApproachBlock
          heading="Transparency First"
          description="We ensure you know where your money is going."
          pic="https://media.gettyimages.com/id/1414459935/photo/employee-diversity.jpg?b=1&s=612x612&w=0&k=20&c=rDumInPfkWRgbBC0EvAmnF3A1nnZPnPu-aBWnfHU38M="
        />
        <ApproachBlock
          heading="Collaboration"
          description="We connect donors directly to beneficiaries."
          pic="https://media.gettyimages.com/id/1407945572/photo/happy-asian-young-woman-waving-hands-looking-at-web-camera-using-phone-for-video-call-at-home.jpg?b=1&s=612x612&w=0&k=20&c=1ejH2A17iMRsiCGNHruYhNHh0IOyRcMa2g6oNsGrH_s="
        />

        <ApproachBlock
          heading="Sustainable Impact"
          description="We aim for long-term solutions, not just temporary relief."
          pic="https://media.gettyimages.com/id/1370325170/photo/people-surrounded-stacks-of-coins-fundraising-and-charity-corporation-joint-venture-fair.jpg?b=1&s=612x612&w=0&k=20&c=zzMLQ3-c8SP8WB7dZ2d1g1avudiX6kT7uzWjJaOSjc4="
        />
      </div>
    </>
  );
}

export default Approach;
