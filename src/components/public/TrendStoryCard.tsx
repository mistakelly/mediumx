import ClapSvg from "../svg/ClapSvg";
import CommentSvg from "../svg/CommentSvg";

const TrendCard = ({ trendNo }: Record<string, number>) => {
  return (
    <a className="trend-card" href="#">
      <div className="trend-card__container">
        {/* header */}
        <div className="trend-card-header">
          <div className="trend-card-number">
            <h1>#{trendNo} </h1>
          </div>
          <div className="trend-card-icon">
            <i className="fa fa-chart-line trend-icon"></i>
          </div>
        </div>

        {/* body */}
        <div className="trend-card-body">
          <div className="trend-card-body-profile">
            <div className="trend-card-body-profile__picture">
              <img src="/assets/images/test_img.png" />
            </div>
            <p>kelly</p>

            {/* verification badge */}
            <div className="premium-badge">
              <img
                className="premium-badge"
                src="/assets/images/premium-badge.webp"
                alt="premium-badg"
              />
            </div>
          </div>

          <div className="trend-card-body__body">
            <h2>3 productivity hacks for developers</h2>
          </div>
        </div>

        {/* footer */}
        <div className="trend-card-footer">
          <div className="clap">
            <ClapSvg />
            <p className="clap__count">1.5</p>
          </div>

          <div className="comment">
            <CommentSvg />
            <p className="comment__count">14</p>
          </div>

          <div className="date-posted">
            <p>
              sep, <span className="date">2024</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TrendCard;
