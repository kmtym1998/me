import { Timeline } from 'antd';
import '../styles/history.css';
import 'antd/dist/antd.css';

export const History: React.FC = () => {
  return (
    <div>
      <Timeline mode="left" pending pendingDot={<></>}>
        <Timeline.Item>
          <p className="timelineCaption">2017-03</p>
          <p className="timelineTitle">千葉市立千葉高等学校卒業</p>
        </Timeline.Item>

        <Timeline.Item>
          <p className="timelineCaption">2017-04</p>
          <p className="timelineTitle">
            名古屋大学情報学部人間社会情報学科 入学
          </p>
        </Timeline.Item>

        <Timeline.Item>
          <p className="timelineCaption">2020-07</p>
          <p className="timelineTitle">
            株式会社 BuySell Technologies 入社 (インターン)
          </p>
        </Timeline.Item>

        <Timeline.Item>
          <p className="timelineCaption">2021-03</p>
          <p className="timelineTitle">
            名古屋大学情報学部人間社会情報学科 卒業
          </p>
        </Timeline.Item>

        <Timeline.Item>
          <p className="timelineCaption">2021-04</p>
          <p className="timelineTitle">
            株式会社 BuySell Technologies 入社 (正社員)
          </p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
