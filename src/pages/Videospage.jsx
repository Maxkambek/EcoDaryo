import Links from "../components/Links";
import clock from "../assets/clock1.png";
import video from "../assets/video.mp4";

const VideosPage = () => {
  return (
    <>
      <div className="Videos">
        <div className="container">
          <div className="vides_header">
            <div className="news_link">
              Bosh sahifa / <span>Videolar</span>
            </div>
            <div className="news_h">Videolar</div>
          </div>
          <div className="videos_main">
            <div className="row">
              <div className="col-4 mb-4">
                <div className="videos_item">
                  <div className="video_container">
                    <video autoPlay controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="video_content_box">
                    <div className="video_name">
                      Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                      29-fevral kuniga qadar...
                    </div>
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="videos_item">
                  <div className="video_container">
                    <video autoPlay controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="video_content_box">
                    <div className="video_name">
                      Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                      29-fevral kuniga qadar...
                    </div>
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="videos_item">
                  <div className="video_container">
                    <video autoPlay controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="video_content_box">
                    <div className="video_name">
                      Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                      29-fevral kuniga qadar...
                    </div>
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="videos_item">
                  <div className="video_container">
                    <video autoPlay controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="video_content_box">
                    <div className="video_name">
                      Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                      29-fevral kuniga qadar...
                    </div>
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="videos_item">
                  <div className="video_container">
                    <video autoPlay controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="video_content_box">
                    <div className="video_name">
                      Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                      29-fevral kuniga qadar...
                    </div>
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default VideosPage;
