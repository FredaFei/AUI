/**
 * @desc 骨架屏
 * @author feihan
 * @date 2022/1/7 21:48
 */
import * as React from "react";
import classes, { createScopedClasses } from "../utils/classnames";
import "./style";

const componentName = "Skeleton";
const sc = createScopedClasses(componentName);

export interface SkeletonProps extends StyledProps {
    /**
     * 段落占位
     * */
    placeholder: string;
    /**
     * 段落占位高度
     * */
    blockGap?: number;
    /**
     * 段落占位下边距
     * */
    repeatGap?: number;
    /**
     * 段落占位行数
     * */
    repeat?: number;
    /**
     * 是否启动动画
     * */
    loading?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
    const lines = props.placeholder.split("\n").map(line => line.trim()).filter(line => line.length > 0);
    const longest = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const createBlocks = () => lines.map(line => {
        const width = line.length / longest * 100 + "%";
        return <div className={sc("block", props.loading && "loading")} style={{ width, height: props.blockGap, marginBottom: props.blockGap }}></div>;
    });
    return <div className={classes(sc("wrapper", (props?.className || "")))} style={{ marginBottom: props.repeatGap }}>
        {createBlocks()}
    </div>;
};
Skeleton.defaultProps = {
    repeat: 1,
    blockGap: 16,
    repeatGap: 4,
    placeholder: "",
    loading: false,
};
export default Skeleton;