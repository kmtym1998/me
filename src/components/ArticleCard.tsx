import { Card } from 'antd';
import type { Metadata } from '../configs/articles/type';
import 'antd/dist/antd.css';

type Props = {
  date: string;
  metadata: Metadata;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
};

export const ArticleCard = ({ date, bodyStyle, metadata, style }: Props) => {
  return (
    <a href={metadata.url} target="_blank">
      <Card
        style={style}
        cover={
          <img src={metadata.image} style={{ border: '1px solid #f0f0f0' }} />
        }
        hoverable
        bodyStyle={bodyStyle}
      >
        <span>{metadata.title}</span>
        <br />
        <span
          style={{
            color: '#bbb',
          }}
        >
          {date}
        </span>
      </Card>
    </a>
  );
};
