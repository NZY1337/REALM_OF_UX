import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Sketch = ({ count }) => <Skeleton height="150px" count={count} />;

export default Sketch;
