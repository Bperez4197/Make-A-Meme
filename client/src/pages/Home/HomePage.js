import React from "react";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function HomePage({ setIsHome }) {
  return (
    <div className="page-wrapper-home">
      <div className="heading">
        <div className="heading-text">
          <h3>
            Utilize Your <span>Creativity</span>
          </h3>
          <p>
            Join over <span>1 Billion</span> people in creating timeless <br />{" "}
            memes for the internet
          </p>
          <Link
            to="/memes"
            onClick={() => setIsHome(false)}
            style={{ textDecoration: "none" }}
          >
            <button className="checkout-btn">Check out the Memes &rarr;</button>
          </Link>
        </div>
      </div>
      <main>
        <div className="main-header">
          <ArrowForwardIosRoundedIcon />
          <ArrowForwardIosRoundedIcon />
          <h3>&nbsp; WHAT YOU CAN DO &nbsp;</h3>
          <ArrowBackIosRoundedIcon />
          <ArrowBackIosRoundedIcon />
        </div>
        <div className="card-container">
          <div className="card">
            <WebRoundedIcon fontSize="large" color="success" />
            <h6>Browse Memes</h6>
            <p>
              Take a look at our memes made in-house as well as those made by
              visitors like you. Memes are here to stay, so if you want to
              understand the references your friends are making{" "}
              <span>stay up to date</span> on the latest memes!
            </p>
          </div>
          <div className="card">
            <EditRoundedIcon fontSize="large" color="success" />
            <h6>Edit Memes</h6>
            <p>
              Messed up on your submission? Don't worry{" "}
              <span>you can change it!</span> If you think a meme could be
              better in any way feel free to edit it. Memes don't belong to
              anyone, so create the best version of long-standing memes!
            </p>
          </div>
          <div className="card">
            <ThumbUpRoundedIcon fontSize="large" color="success" />
            <h6>Like Memes</h6>
            <p>
              Think a meme is awesome? Let the creator know by{" "}
              <span>leaving a like!</span> There are no limit to the amount of
              like you can add, so feel free to show the creators some love.
            </p>
          </div>
          <div className="card">
            <DeleteForeverRoundedIcon fontSize="large" color="success" />
            <h6>Delete Memes</h6>
            <p>
              Don't like one of our memes? You can <span>delete it!</span> All
              memes are good memes, but if you don't think one is good enough to
              be on the site, go ahead and remove it.
            </p>
          </div>
        </div>
      </main>
      <section className="overlay"></section>
      <footer>
        {" "}
        &#169; This site was built and is maintained by Bryce Perez
      </footer>
    </div>
  );
}
