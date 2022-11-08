import { Timeline } from 'antd';
import 'antd/dist/antd.css';

export const History: React.FC = () => {
  return (
    <>
      <Timeline mode="left" pending pendingDot={<></>}>
        <Timeline.Item label={'2020-07'}>
          株式会社 BuySell Technologies 入社 (インターン)
        </Timeline.Item>

        <Timeline.Item label={'2021-03'}>
          名古屋大学情報学部人間社会情報学科 卒業
        </Timeline.Item>

        <Timeline.Item label={'2021-04'}>
          株式会社 BuySell Technologies 入社 (正社員)
        </Timeline.Item>
      </Timeline>
    </>
  );
};
