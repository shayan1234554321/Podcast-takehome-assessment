import { motion } from "framer-motion";
import "./Podcast.css";

const Podcast = ({ podcast }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, transform: "translateY(30px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: { duration: 0.3, type: "spring", stiffness: 100 },
      }}
      className="podcast"
    >
      <img src={podcast.image} alt="podcast" />
      <h3>{podcast.title}</h3>
      <p>{podcast.description}</p>
      <div className="categoryContainer">
        <div>
          <img src="/human1.png" className="human1" alt="human" />
          <img src="/human2.png" className="human2" alt="human" />
          <img src="/human3.png" className="human3" alt="human" />
          <h5>{podcast.attending}+</h5>
        </div>
        <div>{podcast.category}</div>
      </div>
    </motion.div>
  );
};

export default Podcast;
