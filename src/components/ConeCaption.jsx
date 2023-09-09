import { Space } from "antd";

const ConeCaption = ({ coneParameters }) => {
    const { height, radius, segments } = coneParameters;

    return (
        <Space size="large">
          <span>H: {height}</span>
          <span>R: {radius}</span>
          <span>S: {segments}</span>
        </Space>
    )
}

export default ConeCaption;